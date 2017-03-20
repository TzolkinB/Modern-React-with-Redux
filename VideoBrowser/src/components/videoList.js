import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
	const { videos } = props;

	const videoItems = videos.map( video => 
		<VideoListItem 
			onVideoSelect={props.handleSelect}
			video={video} 
			key={video.etag} 
		/> 
	)

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;