import { SetStateAction, useState } from "react"

function SearchBar(props: { handleSearch: (term: string) => Promise<void> }) {
  const { handleSearch } = props
  const [term, setTerm] = useState("")

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    handleSearch(term)
  }

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTerm(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar
