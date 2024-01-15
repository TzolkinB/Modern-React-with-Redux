import React from 'react';
import { useState } from 'react';

function SearchBar({ handleSearch }) {
	const [term, setTerm] = useState('')

	const handleFormSubmit = (event) => {
		event.preventDefault();
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