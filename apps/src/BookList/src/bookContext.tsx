import { createContext, PropsWithChildren, useMemo, useState } from "react"
import axios from "axios"
import { BookType, BooksMemoType, EditBookType } from "./types.tsx"

export const BookContext = createContext<BooksMemoType>({
  books: [],
  setBooks: () => {},
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EditBookContext = createContext<
  (id: number, newTitle: string) => Promise<void>
>({})

export function BookContextProvider({ children }: PropsWithChildren<unknown>) {
  const [books, setBooks] = useState<BookType[]>([])

  // linter suggested wrapping in useCallback hook
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const booksMemo = useMemo(() => ({ books, setBooks }), [books, setBooks])

  return (
    <BookContext.Provider value={booksMemo}>
      <EditBookContext.Provider value={editBookById}>
        {children}
      </EditBookContext.Provider>
    </BookContext.Provider>
  )
}
