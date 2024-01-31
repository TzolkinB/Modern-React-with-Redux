import { SetStateAction, useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
// import { useFormControl } from '@mui/material/FormControl';

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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <div>
        <TextField
          id="outlined-search"
          label="Search Field"
          type="search"
          value={term}
          onChange={handleChange}
          sx={{ backgroundColor: "#fff" }}
        />
        {/* <form onSubmit={handleFormSubmit}>
          <input value={term} onChange={handleChange} />
        </form> */}
      </div>
    </Box>
  )
}

export default SearchBar
