import { DataObj } from "../types";

const ImageShow = (props: {image: DataObj, key: string}) => {
	const { image, onImageSelect } = props;

	const imageUrl = image.urls.thumb;

	return (
		<li className="list-group-item" onClick={() => onImageSelect(image)}>
			<div className="image-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} alt={image.alt_description}/>
				</div>
				<div className="media-body">
					<div className="media-heading">
						{image.alt_description}
					</div>
				</div>
			</div>
		</li>
	)
};

export default ImageShow;