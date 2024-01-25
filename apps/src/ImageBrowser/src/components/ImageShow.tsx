import { DataObj } from "../types.tsx"

function ImageShow(props: { image: DataObj }) {
  const { image } = props

  const imageUrl = image.urls.thumb

  function onImageSelect(): void {
    throw new Error(`Function not implemented, ${image}`)
  }

  return (
    <li className="list-group-item">
      <div
        className="image-list media"
        role="button"
        tabIndex={0}
        onClick={() => onImageSelect(image)}
        onKeyUp={() => onImageSelect(image)}
      >
        <div className="media-left">
          <img
            className="media-object"
            src={imageUrl}
            alt={image.alt_description}
          />
        </div>
        <div className="media-body">
          <div className="media-heading">{image.alt_description}</div>
        </div>
      </div>
    </li>
  )
}

export default ImageShow
