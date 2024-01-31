import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { DataObj } from "../types.tsx"

function ImageShow(props: { image: DataObj; key: string }) {
  const { image, key } = props

  const imageUrl = image.urls.thumb

  // function onImageSelect(): void {
  //   throw new Error(`Function not implemented, ${image}`)
  // }

  return (
    <ImageList sx={{ width: 500, height: 450, columns: 4 }}>
      <ImageListItem key={key}>
        <img
          srcSet={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${imageUrl}?w=248&fit=crop&auto=format`}
          alt={image.alt_description}
          loading="lazy"
        />
        <ImageListItemBar
          title={image.alt_description}
          subtitle={<span>by: {image.username}</span>}
          position="below"
        />
      </ImageListItem>
    </ImageList>
  )
}

export default ImageShow
