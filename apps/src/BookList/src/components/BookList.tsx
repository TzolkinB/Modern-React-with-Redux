import { useContext } from "react"
import BookShow from "./BookShow.tsx"
import { BookContext } from "../bookContext.tsx"

function BookList(props: { onDelete: (id: number) => void }) {
  const { onDelete } = props
  const { books } = useContext(BookContext)
  const renderedBooks = books?.map((book) => {
    return <BookShow onDelete={onDelete} key={book.id} book={book} />
  })

  return <div>{renderedBooks}</div>
}

export default BookList
