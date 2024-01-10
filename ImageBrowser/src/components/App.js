import React from 'react';
import searchImages from '../api';
import _ from 'lodash';
import SearchBar from './SearchBar';
// import VideoList from './ImageList';
// import VideoDetail from './ImageShow';

function App() {
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


  // render() {
  	// debounce 300 means search only calls every 300 milliseconds
  	// const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
		const handleSubmit = term => {
			console.log('search term:', term)
			searchImages(term)
		}

    return (
    	<div className="container-fluid">
				<h1>Unplash Image Search</h1>
      	<SearchBar handleSearch={handleSubmit} />
      	{/* <VideoDetail video={this.state.selectedVideo} />
      	<VideoList 
      		videos={this.state.videos}
      		handleSelect={this.selectVideo} /> */}
      </div>
    );
  };
// }

export default App