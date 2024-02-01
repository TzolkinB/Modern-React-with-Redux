import { SetStateAction, useState } from "react"
import Card from "@mui/material/Card"
// import IconButton from "@mui/material/IconButton"
// import ClearIcon from "@mui/icons-material/Clear"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { BookType } from "../types.tsx"

function BookEdit(props: { book: BookType, handleCancel: () => void }) {
  const { book, handleCancel } = props
  const [title, setTitle] = useState(book.title)

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    console.log("New title", title)
  }

  const handleSave = () => {
    console.log("save")
  }

  // const handleCancel = () => {
  //   setShowEdit(!showEdit)
  // }

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
            // sx={{ backgroundColor: "#fff" }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSave}>
          Save
        </Button>
        <Button size="small" onClick={handleCancel}>Cancel</Button>
      </CardActions>
    </Card>
  )
}

export default BookEdit
