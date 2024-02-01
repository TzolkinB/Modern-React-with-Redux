import { useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import IconButton from "@mui/material/IconButton"
import ClearIcon from "@mui/icons-material/Clear"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { BookType } from "../types.tsx"
import BookEdit from "./BookEdit.tsx"

function Bookshow(props: { book: BookType; onDelete: (id: number) => void }) {
  const { book, onDelete } = props
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    onDelete(book.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleCancel = () => {
    setShowEdit(!showEdit)
  }

  return (
    <Box sx={{ width: 275, py: 2 }}>
      {showEdit ? (
        <BookEdit book={book} handleCancel={handleCancel}/>
      ) : (
        <Card variant="outlined">
          <CardHeader
            action={
              <IconButton aria-label="delete" onClick={handleDelete}>
                <ClearIcon />
              </IconButton>
            }
            title={book.title}
          />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              book content here
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleEdit}>
              Edit
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  )
}

export default Bookshow
