import React from 'react';
import { useState } from 'react';
import searchImages from '../api';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

function App() {
	// set images to an empty array as default since unsplash data is array
	const [images, setImages] = useState([])

	/* ----- The below was before useState hook existed ----- */
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		videos: [],
	// 		selectedVideo: null
	// 		// this.state.videos is set to an empty array because the result 
	// 		//from console.log(videos) from below is an array
	// 	};
	// 	//initial search
	// 	searchImages()
	// }

	// callback function to pass selectedVideo from App to VideoList then to VideoListItem
	// selectVideo = (selectedVideo) => {
	// 	this.setState({ selectedVideo })
	// } 
	/* ---------------------------- */


		const handleSubmit = async term => {
			console.log('search term:', term)
			const result = await searchImages(term)

			setImages(result)
		}

    return (
    	<div className="container-fluid">
				<h1>Unplash Image Search</h1>
      	<SearchBar handleSearch={handleSubmit} />
				<ImageList images={images} />
      </div>
    );
  };

export default App