import BookShow from "./BookShow.tsx"
import { BookType } from "../types.tsx"

function BookList(props: {
  books: BookType[]
  onDelete: (id: number) => void
}) {
  const { books, onDelete } = props
  const renderedBooks = books?.map((book) => {
    return <BookShow onDelete={onDelete} key={book.id} book={book} />
    // return <div>Book:{book.title}</div>
  })

  return <div>{renderedBooks}</div>
}

export default BookList
