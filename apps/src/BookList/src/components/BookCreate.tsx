import { SetStateAction, useState } from 'react'
import { BookType } from '../types';

function BookCreate(props: { onCreate: (title: string) => BookType[] }) {
  const { onCreate } = props
  const [title, setTitle] = useState('')

  const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		onCreate(title)
    setTitle('')
	}

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setTitle(event.target.value)
	}

  return (
    <div>
      <p>Add a book</p>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
				<input value={title} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  )
}

export default BookCreate