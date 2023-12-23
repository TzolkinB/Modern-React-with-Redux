import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	handleInputChange = (term) => {
		this.setState({term});
		this.props.handleSearch(term);
	}

	render() {
		return (
			<div className="search-bar">
				{/* onChange gets the value from the input and sends it as the term for handleInputChange function*/}
				<input onChange={e => this.handleInputChange(e.target.value)}/>
			</div>
		);
	}
};

export default SearchBar;