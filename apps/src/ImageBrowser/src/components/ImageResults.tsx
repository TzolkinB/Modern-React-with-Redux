import { styled } from "@mui/material/styles"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { DataObj } from "../types.tsx"

const StyledImageListItem = styled(ImageListItem)`
  & .MuiImageListItem-img {
    align-self: center;
    width: auto;
    flex-grow: 0.5;
    -webkit-flex-grow: 0.5;
  }
`

function ImageResults(props: { images: DataObj[] }) {
  const { images } = props

  return (
    <ImageList cols={5}>
      {images?.map((image) => {
        const imageUrl = image.urls.thumb
        return (
          <StyledImageListItem key={image.id}>
            <img
              srcSet={imageUrl}
              src={imageUrl}
              alt={image.alt_description}
              loading="lazy"
            />
            <ImageListItemBar
              title={image.alt_description}
              subtitle={<span>by: {image.user?.username}</span>}
              position="below"
              sx={{ alignSelf: "center" }}
            />
          </StyledImageListItem>
        )
      })}
    </ImageList>
  )
}

export default ImageResults
