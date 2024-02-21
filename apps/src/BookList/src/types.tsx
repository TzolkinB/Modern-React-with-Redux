import React from "react"

export type BookType = {
  id: number
  title: string
}

export type BooksMemoType = {
  books: BookType[]
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>
}

export type EditBookType = {
  editBookById: (id: number, newTitle: string) => Promise<void>
}
