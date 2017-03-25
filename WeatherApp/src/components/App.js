import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';
import '../../public/style.css';

class App extends Component {
  render() {
    return (
      <div className="grid">
      	<div className="container-fluid">
      		<div className="row">
      			<div className="col-sm-3"></div>
      			<div className="col-sm-6">
        			<SearchBar />
              <WeatherList />
      			</div>
      			<div className="col-sm-3"></div>
    			</div>
        </div>
      </div>
    );
  }
}

export default App;

