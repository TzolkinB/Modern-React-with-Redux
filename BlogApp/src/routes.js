import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import App 									 from './components/App';
import PostsIndex 					 from './components/postsIndex';
import PostsNew 						 from './components/postsNew';
import PostsShow 						 from './components/postsShow';

export default (
  <Route path="/" component={App}>
    {/* If the route only matches the parent, aka "/", show IndexRoute */}
    <IndexRoute component={PostsIndex} />
  	<Route path="posts" component={PostsShow} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);