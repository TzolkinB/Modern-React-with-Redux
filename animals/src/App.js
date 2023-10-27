import { useState } from 'react'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  // set "animals" to initial value of empty array
  // setAnimals is setter function used to update state of "animals"
  // [piece of status, setter function] = useState(initial default value)
  const [animals, setAnimals] = useState([])
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }
  return (
    <div> 
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  )
}

export default App