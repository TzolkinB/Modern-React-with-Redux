import { createContext, PropsWithChildren, useMemo, useState } from "react"
import axios from "axios"
import { BookType, BooksMemoType } from "./types.tsx"

export const BookContext = createContext<BooksMemoType>({
  books: [],
  setBooks: () => {},
  // editBookById: () => {},
})

export function BookContextProvider({
  children,
}: PropsWithChildren<NonNullable<unknown>>) {
  const [books, setBooks] = useState<BookType[]>([])

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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
    <BookContext.Provider value={booksMemo}>{children}</BookContext.Provider>
  )
}
