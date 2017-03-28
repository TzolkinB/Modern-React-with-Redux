import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import {bindActionCreators} from 'redux';
//import { Link } from 'react-router';

class PostsIndex extends React.Component {

	componentWillMount () {
		// call the action creator, made accessible by mapDispatchToProps, to fetch posts
		// to test at this point, look in "Network" tab of dev tools to see a post request
		this.props.fetchPosts();
	}

	render() {
		return(
			<div>
				Posts Index here!
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);