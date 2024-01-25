import React, { useState } from "react"
import BookCreate from "./src/components/BookCreate.tsx"
import BookList from "./src/components/BookList.tsx"
import { BookType } from "./src/types.tsx"

function App() {
  const [books, setBooks] = useState<BookType[]>([])

  const createBook = (title: string) => {
    console.log("Need to add book with", title)
    const updatedBooks = [...books, { id: Math.random() * 9999, title }]
    setBooks(updatedBooks)
  }

  return (
    <div>
      <h1>BookList App</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  )
}

export default App
