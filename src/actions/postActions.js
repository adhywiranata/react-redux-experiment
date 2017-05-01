import { FETCH_POST_SUCCESS, ADD_POST_SUCCESS } from './constants';

export const addPostSuccess = (newPost) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: newPost,
  };
};

export const addPost = (newPost) => {
  newPost.createdAt = new Date().toISOString();
  return (dispatch) => {
    fetch('http://localhost:1234/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
};

export const fetchPostsSuccess = (newUser) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: newUser,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    fetch('http://localhost:1234/api/posts')
      .then(res => res.json())
      .then(data => dispatch(fetchPostsSuccess(data)));
  };
};
