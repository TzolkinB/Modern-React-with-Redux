import { SetStateAction, useState } from "react"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { BookType } from "../types.tsx"

function BookEdit(props: {
  book: BookType
  handleCancel: () => void
  onSubmit: (id: number, newTitle: string) => void
}) {
  const { book, handleCancel, onSubmit } = props
  const [title, setTitle] = useState(book.title)

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log("Edited title is", title)
    onSubmit(book.id, title)
  }

  return (
    <Card variant="outlined">
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
