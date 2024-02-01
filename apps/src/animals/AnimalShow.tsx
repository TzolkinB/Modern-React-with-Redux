import { useState } from "react"
import Grid from "@mui/material/Grid"
import cat from "./img/cat.jpg"
import cow from "./img/cow.jpg"
import dog from "./img/dog.jpg"
import gator from "./img/gator.jpg"
import horse from "./img/horse.jpg"
import owl from "./img/owl.jpg"

function AnimalShow(props: { type: string }) {
  const { type } = props
  const [clicks, setClicks] = useState(0)

  const imgMap = {
    cat,
    cow,
    dog,
    gator,
    horse,
    owl,
  }

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    // <Grid container item spacing={1}>
    <Grid item xs={2}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyUp={handleClick}
      >
        <img
          alt="animal"
          src={imgMap[type as keyof typeof imgMap]}
          height={100}
        />
        <p style={{ color: "red", fontSize: `${10 + 10 * clicks}px` }}>
          &#x2665;
        </p>
      </div>
    </Grid>
    // </Grid>
  )
}

export default AnimalShow
