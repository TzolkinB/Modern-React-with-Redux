import React, { SetStateAction, useState } from "react"

function BookCreate(props: { onCreate: (title: string) => void }) {
  const { onCreate } = props
  const [title, setTitle] = useState("")

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onCreate(title)
    setTitle("")
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTitle(event.target.value)
  }

  return (
    <div>
      <p>Add a book</p>
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Title
          <input type="text" value={title} onChange={handleChange} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default BookCreate
