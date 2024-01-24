import { DataObj } from '../types';
import ImageShow from './ImageShow';

const ImageList = (props: {images: DataObj[]}) => {
	const { images } = props;

	const imageItems = images?.map( image => 
		<ImageShow 
			// onImageSelect={props.handleSelect}
			image={image} 
			key={image.id} 
		/> 
	)

	return (
		<ul className="col-md-4 list-group">
			{imageItems}
		</ul>
	)
}

export default ImageList;