import React       from 'react';
import { connect } from 'react-redux';

function BookDetail({ book }) {
	// move destructure up instead of using props
	// const { book } = props;
		
	if(!book){
		return <div>Select a book to get started.</div>
	}
	return (
		<div>
			<h4>Details for:</h4>
			<div>Title: {book.title}</div>
			<div>Pages: {book.pages}</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		// state.activeBook comes from the activeBook reducer creatinig the activeBook piece of state
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);