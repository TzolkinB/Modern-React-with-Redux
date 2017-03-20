import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCufTVWiPSupr7n8eqdfchK3699pFLCTGg';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
			// this.state.videos is set to an empty array because the result 
			//from console.log(videos) from below is an array
		};
		//initial search
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//console.log(videos);
			this.setState({ 
				selectedVideo: videos[0],
				videos 
			});
		});
	}

	// callback function to pass selectedVideo from App to VideoList then to VideoListItem
	selectVideo = (selectedVideo) => {
		this.setState({ selectedVideo })
	} 


  render() {
  	// debounce 300 means search only calls every 300 milliseconds
  	const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)

    return (
    	<div className="container-fluid">
      	<SearchBar handleSearch={videoSearch} />
      	<VideoDetail video={this.state.selectedVideo} />
      	<VideoList 
      		videos={this.state.videos}
      		handleSelect={this.selectVideo} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
