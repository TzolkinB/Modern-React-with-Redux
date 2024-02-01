import BookShow from "./BookShow.tsx"
import { BookType } from "../types.tsx"

function BookList(props: {
  books: BookType[]
  onDelete: (id: number) => void
  onEdit: (id: number, newTitle: string) => void
}) {
  const { books, onDelete, onEdit } = props
  const renderedBooks = books?.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    )
  })

  return <div>{renderedBooks}</div>
}

export default BookList
