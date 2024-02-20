export type BookType = {
  id: number
  title: string
}

export type BooksMemoType = {
  books: BookType[]
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>
  // editBookById: (id: number, newTitle: string) => void
}

// export type BookContextType = {
//   // books: BookType[]
//   booksMemo: booksMemoType 
//   editBookById: (id: number, newTitle: string) => void
// }
