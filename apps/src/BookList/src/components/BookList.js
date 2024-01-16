import BookShow from './BookShow'

function BookList({ books }) {
  const renderedBooks = books?.map(book => {
    // return <BookShow key={book.id} book={book} />
    return <div>Book:{book.title}</div>
  })

  // return <div>BookList</div>
  return <div>{renderedBooks}</div>
}

export default BookList