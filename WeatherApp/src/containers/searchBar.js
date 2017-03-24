import React from 'react';

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

export default SearchBar;