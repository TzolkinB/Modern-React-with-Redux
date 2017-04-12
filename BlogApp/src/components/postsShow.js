import React, {PropTypes}      from 'react';
import {connect} 						   from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {bindActionCreators}    from 'redux';
import {Link} 							   from 'react-router';


class PostsShow extends React.Component {
	 static contextTypes = {
    router: PropTypes.object
  };

	componentWillMount () {
		// call the action creator, made accessible by mapDispatchToProps, to fetch post
		// to test at this point, look in "Network" tab of dev tools to see a post request
		this.props.fetchPost(this.props.params.id);		
	}

	onDelete(){
		this.props.deletePost(this.props.params.id)
			.then(() => {
				//blog post has been deleted, navigate back to index
				this.context.router.push('/')
			});
	}

	render() {
		const { post } = this.props;

		if(!post){
			return <div>Loading...</div>;
		}

		return(
			<div>
				<Link to="/">Back to Index</Link>
				<button 
					className="btn btn-danger text-right"
					onClick={this.onDelete.bind(this)}>
					Delete Button
				</button>
				<h3>{post.title}</h3>
				<h6>{post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {post: state.posts.post};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);