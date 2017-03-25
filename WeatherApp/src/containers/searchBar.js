import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: ''
		};
	}

	onInputChange = (e) => {
		this.setState({
			city: e.target.value
		});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.fetchWeather(this.state.city);
		// clears search
		this.setState({city: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Enter a City"
					className="form-control"
					value={this.state.city}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-success">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	//ensures that the action flows down through the middleware and then the reducer
	return bindActionCreators({ fetchWeather }, dispatch);
}
// null put in place of mapStateToProps
export default connect(null, mapDispatchToProps)(SearchBar);