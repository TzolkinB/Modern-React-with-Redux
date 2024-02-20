import { useEffect, useContext } from "react"
import axios from "axios"
import Typography from "@mui/material/Typography"
import BookCreate from "./src/components/BookCreate.tsx"
import BookList from "./src/components/BookList.tsx"
// import { BookType } from "./src/types.tsx"
import { BookContext } from "./src/bookContext.tsx"

function App() {
  // const [books, setBooks] = useState<BookType[]>([])
  console.log('context', useContext(BookContext))
  const { books, setBooks } = useContext(BookContext)

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

  // useEffect is primarily used when initially rendered
  useEffect(() => {
    fetchBooks()
  }, [])

  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    })
    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  // const editBookById = async (id: number, newTitle: string) => {
  //   const response = await axios.put(`http://localhost:3001/books/${id}`, {
  //     title: newTitle,
  //   })
  //   const updatedBooks = books.map((book) => {
  //     if (book.id === id) {
  //       return { ...book, ...response.data }
  //     }
  //     return book
  //   })
  //   setBooks(updatedBooks)
  // }

  return (
    <div>
      <Typography variant="h2" component="h1">
        BookList App
      </Typography>
      <BookCreate onCreate={createBook} />
      <BookList onDelete={deleteBookById} />
    </div>
  )
}

export default App
