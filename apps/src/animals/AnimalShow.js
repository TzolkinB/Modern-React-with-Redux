import { useState } from 'react'
import cat from './img/cat.jpg'
import cow from './img/cow.jpg'
import dog from './img/dog.jpg'
import gator from './img/gator.jpg'
import horse from './img/horse.jpg'
import owl from './img/owl.jpg'

function AnimalShow(props) {
  const { type } = props
  const [clicks, setClicks] = useState(0)

  const imgMap = {
    cat, cow, dog, gator, horse, owl
  }

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return <div onClick={handleClick}>
    <img alt="animal" src={imgMap[type]} height={100} />
    <p style={{color:"red", fontSize: 10 + 10 * clicks + 'px'}}>&#x2665;</p>
  </div>
}

export default AnimalShow