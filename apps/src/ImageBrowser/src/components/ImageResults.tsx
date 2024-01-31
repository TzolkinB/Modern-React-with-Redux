import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { DataObj } from "../types.tsx"
// import ImageShow from "./ImageShow.tsx"

function ImageResults(props: { images: DataObj[] }) {
  const { images } = props

  images?.map((image) => {
    //   <ImageShow
    //     // onImageSelect={props.handleSelect}
    //     image={image}
    //     key={image.id}
    //   />
    // ))
    const imageUrl = image.urls.thumb

    return (
      <ImageList sx={{ width: 500, height: 450, columns: 4 }}>
        <ImageListItem key={image.id}>
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
  })
}

export default ImageResults
