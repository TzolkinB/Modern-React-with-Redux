import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
//export const FETCH_POST = 'FETCH_POST';
//export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=everythingisshinycaptain';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    .then(response => {
      console.log('response', response);
      this.setState({
        posts:response.data
      })
    })
    .catch( error => {
      console.log("error", error)
    })

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
	// props are all the inputs we need to post: title, categories, content
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}
