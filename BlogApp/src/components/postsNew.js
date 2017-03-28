import React from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends React.Component {
	render() {
		//handleSubmit is a function given to us by redux-form
		const { 
			fields: { title, categories, content },
		  handleSubmit, createPost 
		} = this.props
		console.log(this.props);
		return(
			<div>

				<form onSubmit={handleSubmit(createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

			</div>
		);
	}
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// in the case below, mapStateToProps is null and we only need "createPost" action creator 
// so can pass it right through where we normally have "mapDispatchToProps"

export default reduxForm({
	// pass in what form is going to be called as well as fields
	form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, {createPost})(PostsNew);