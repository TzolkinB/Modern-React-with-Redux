import { useState } from "react"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import AddIcon from "@mui/icons-material/Add"
import Typography from "@mui/material/Typography"
import AnimalShow from "./AnimalShow.tsx"

type animal = string
const animalList = ["owl", "cat", "cow", "dog", "gator", "horse"]

const getRandomAnimal = () => {
  return animalList[Math.floor(Math.random() * animalList.length)]
}

function App() {
  // set "animals" to initial value of empty array
  // setAnimals is setter function used to update state of "animals"
  // [piece of status, setter function] = useState(initial default value)
  const [animals, setAnimals] = useState<animal[]>([])
  const handleClick = () => {
    const randomAnimal = getRandomAnimal()
    if (animals.includes(randomAnimal)) {
      return (
        <Alert severity="warning">Animal already added. Try again.</Alert>
        // getRandomAnimal()
      )
    }
    return setAnimals([...animals, randomAnimal])
  }

  // eslint-disable-next-line no-shadow
  const renderedAnimals = animals.map((animal, i) => {
    // console.log(animal)
    // if (!animal) {
    //   return <Alert severity="warning">Animal already added. Try again.</Alert>
    // }
    // eslint-disable-next-line react/no-array-index-key
    return <AnimalShow type={animal} key={i} />
  })

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Favorite Animals App
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add Animal
      </Button>
      <Box mt={10} mx={10}>
        <Grid container spacing={0}>
          {renderedAnimals}
        </Grid>
      </Box>
    </div>
  )
}

export default App
