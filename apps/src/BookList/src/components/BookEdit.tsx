import { SetStateAction, useState, useContext } from "react"
import axios from "axios"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { BookType } from "../types.tsx"
import { BookContext } from "../bookContext.tsx"

function BookEdit(props: {
  book: BookType
  handleCancel: () => void
  onSubmit: () => void
}) {
  const { book, handleCancel, onSubmit } = props
  const { books, setBooks } = useContext(BookContext)
  const [title, setTitle] = useState(book.title)

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })
    const updatedBooks = books.map((bookItem) => {
      if (bookItem.id === id) {
        return { ...bookItem, ...response.data }
      }
      return bookItem
    })
    setBooks(updatedBooks)
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log("Edited title is", title)
    onSubmit()
    editBookById(book.id, title)
  }

  return (
    <Card variant="outlined" data-testid={`edit-card-${book.id}`}>
      <CardContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-title"
            label="Title"
            type="input"
            value={title}
            onChange={handleChange}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="outlined" size="small" onClick={handleCancel}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}

export default BookEdit
