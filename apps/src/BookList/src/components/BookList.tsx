import { useContext } from "react"
import BookShow from "./BookShow.tsx"
// import { BookType } from "../types.tsx"
import { BookContext } from "../bookContext.tsx"

function BookList(props: {
  // books: BookType[]
  onDelete: (id: number) => void
  // onEdit: (id: number, newTitle: string) => void
}) {
  const { onDelete } = props
  const { books, editBookById } = useContext(BookContext)
  const renderedBooks = books?.map((book) => {
    return (
      <BookShow
        onDelete={onDelete}
        onEdit={editBookById}
        key={book.id}
        book={book}
      />
    )
  })

  return <div>{renderedBooks}</div>
}

export default BookList
