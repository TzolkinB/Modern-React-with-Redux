import { useState } from "react"
import Typography from "@mui/material/Typography"
import BookCreate from "./src/components/BookCreate.tsx"
import BookList from "./src/components/BookList.tsx"
import { BookType } from "./src/types.tsx"

function App() {
  const [books, setBooks] = useState<BookType[]>([])

  const createBook = (title: string) => {
    console.log("Need to add book with", title)
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ]
    setBooks(updatedBooks)
  }

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <div>
      <Typography variant="h2" component="h1">
        BookList App
      </Typography>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  )
}

export default App
