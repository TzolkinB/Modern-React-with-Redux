import React from 'react';
import ImageShow from './ImageShow';

const ImageList = (props) => {
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