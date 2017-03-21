import React       from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
	render() {
		const { book } = this.props;
		
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
}

const mapStateToProps = (state) => {
	return {
		// state.activeBook comes from the activeBook reducer creatinig the activeBook piece of state
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);