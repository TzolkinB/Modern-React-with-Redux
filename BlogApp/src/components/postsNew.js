import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {createPost} from '../actions/index';

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = "Enter a title";
  }
  if(!values.categories) {
    errors.categories = "Enter a category";
  }
  if(!values.content) {
    errors.content = "Enter some content";
  }
  return errors;
}

class PostsNew extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate user to index
        this.context.router.push('/')
       });
  }

	render() {
		//handleSubmit is a function given to us by redux-form
		const { fields: { title, categories, content },
      handleSubmit, onSubmit} = this.props

    const titleValid = title.touched && title.invalid ? 'has-danger' : '';
    const categoriesValid = categories.touched && categories.invalid ? 'has-danger' : '';
    const contentValid = content.touched && content.invalid ? 'has-danger' : '';

		return(
			<div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create A New Post</h3>
          <div className={`form-group ${titleValid}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
            <div className="text-help">
              {title.touched ? title.error : ''}
            </div>
          </div>

          <div className={`form-group ${categoriesValid}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`form-group ${contentValid}`}>
            <label>Content</label>
            <textarea className="form-control" {...content} />
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary button-margin">Submit</button>
          <Link to="/" className="btn btn-danger button-margin">Cancel</Link>
        </form>

			</div>
		);
	}
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// in the case below, mapStateToProps is null and we only need "createPost" action creator 
// so can pass it right through where we normally have "mapDispatchToProps"

PostsNew = reduxForm({
	// pass in what form is going to be called as well as fields
	form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);

export default PostsNew;