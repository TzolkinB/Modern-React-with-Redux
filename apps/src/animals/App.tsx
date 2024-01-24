import { useState } from 'react'
import AnimalShow from './AnimalShow'

type animal = string

const getRandomAnimal = () => {
  const animals = ['owl', 'cat', 'cow', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  // set "animals" to initial value of empty array
  // setAnimals is setter function used to update state of "animals"
  // [piece of status, setter function] = useState(initial default value)
  const [animals, setAnimals] = useState<animal[]>([])
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, i) => {
    return <AnimalShow type={animal} key={i} />;
  });
  return (
    <div> 
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  )
}

export default App