import React  							from 'react';
import {connect} 						from 'react-redux';
import {fetchPosts} 				from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} 							from 'react-router';

class PostsIndex extends React.Component {
	componentWillMount () {
		// call the action creator, made accessible by mapDispatchToProps, to fetch posts
		// to test at this point, look in "Network" tab of dev tools to see a post request
		this.props.fetchPosts()
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="text-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		});
	}

	render() {
		//if(){
		//	return <div> No response yet </div>
		//}
		return(
			<div>
				<div className="text-right">
         	<Link to="/posts/new" className="btn btn-success">
            New Post
          </Link>
        </div>
        <h3>Posts</h3>
      	<ul className="list-group">
      		{this.renderPosts()}
      	</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts.all }; 
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);