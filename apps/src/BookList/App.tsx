import { useState } from "react"
import Typography from "@mui/material/Typography"
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
      <Typography variant="h2">BookList App</Typography>
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  )
}

export default App
