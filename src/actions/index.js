import * as ActionTypes from './actionTypes';

export const addUserSuccess = (newUser) => {
  return {
    type: ActionTypes.ADD_USER_SUCCESS,
    payload: newUser,
  };
};

export const addUser = (newUser) => {
  return (dispatch) => {
    fetch('http://localhost:1234/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    fetch('http://localhost:1234/users')
      .then(res => res.json())
      .then(data => dispatch(fetchUserSuccess(data)));
  };
};

export const fetchPostsSuccess = (newUser) => {
  return {
    type: ActionTypes.FETCH_POST_SUCCESS,
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
