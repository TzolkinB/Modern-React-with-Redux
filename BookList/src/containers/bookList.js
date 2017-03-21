import React 								from 'react';
import { connect } 					from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} 				from '../actions/index';

class BookList extends React.Component {
	renderList = () => {
		// props of books comes from mapStateToProps
		const { books } = this.props;

		return books.map( book  => {
			return (
				<li 
					className="list-group-item" 
					onClick={() => this.props.selectBook(book)}
					key={book.title} >
					{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	};
}

const mapDispatchToProps = (dispatch) => {
  //whenever selectBook is called, the result should be passed/ dispatched to all reducers
  // aka bindActionCreators
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);