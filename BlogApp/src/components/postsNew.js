import React from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends React.Component {
	render() {
		//handleSubmit is a function given to us by redux-form
		const { fields: { title, categories, content }, handleSubmit } = this.props
		
		return(
			<div>

				<form onSubmit={handleSubmit}>
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

export default reduxForm({
	// pass in what form is going to be called as well as fields
	form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);