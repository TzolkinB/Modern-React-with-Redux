import React from 'react';
import { useState } from 'react';

function SearchBar({ handleSearch }) {
	const [term, setTerm] = useState('')
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		term: ''
	// 	};
	// }

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// this.setState({term});
		// this.props.handleSearch(term);
		handleSearch(term)
	}

	const handleChange = (event) => {
		setTerm(event.target.value)
	}

		return (
			<div className="search-bar">
				<form onSubmit={handleFormSubmit}>
					<input value={term} onChange={handleChange} />
				</form>
			</div>
		);
};

export default SearchBar;