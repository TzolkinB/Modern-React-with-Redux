import { createContext, PropsWithChildren, useMemo, useState } from "react"
import { BookType, BooksMemoType } from "./types.tsx"

export const BookContext = createContext<BooksMemoType>({
  books: [],
  setBooks: () => {},
})

export function BookContextProvider({ children }: PropsWithChildren<unknown>) {
  const [books, setBooks] = useState<BookType[]>([])

  const booksMemo = useMemo(() => ({ books, setBooks }), [books, setBooks])

  return (
    <BookContext.Provider value={booksMemo}>{children}</BookContext.Provider>
  )
}
