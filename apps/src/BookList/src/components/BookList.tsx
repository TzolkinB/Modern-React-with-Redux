import BookShow from './BookShow'
import { BookType } from '../types'


function BookList(props: { books: BookType[] }) {
  const { books } = props
  const renderedBooks = books?.map(book => {
    // return <BookShow key={book.id} book={book} />
    return <div>Book:{book.title}</div>
  })

  // return <div>BookList</div>
  return <div>{renderedBooks}</div>
}

export default BookList