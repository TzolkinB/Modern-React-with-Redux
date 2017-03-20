import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
	renderList = () => {
		// books props comes from mapStateToProps
		const { books } = this.props;

		return books.map( book  => {
			return (
				<li className="list-group-item" key={book.title}>
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

export default connect(mapStateToProps)(BookList);