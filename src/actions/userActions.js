import {
  FETCH_USER_SUCCESS,
  FETCH_USER_LOADING,
  FETCH_USER_FAILED,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from './constants';

export const addUserSuccess = newUser => ({
  type: ADD_USER_SUCCESS,
  payload: newUser,
});

export const addUserFailed = err => ({
  type: ADD_USER_FAILED,
  payload: err,
});

export const addUser = newUser => (dispatch) => {
  dispatch({ type: ADD_USER_LOADING });
  fetch('http://localhost:1234/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser),
  })
    .then(res => res.json())
    .then(data => dispatch(addUserSuccess(newUser)))
    .catch(err => dispatch(addUserFailed(err)));
};

export const fetchUsersSuccess = users => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchUsersFailed = err => ({
  type: FETCH_USER_FAILED,
  payload: err,
});

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USER_LOADING });
  fetch('http://localhost:1234/users')
    .then(res => res.json())
    .then(data => dispatch(fetchUsersSuccess(data)))
    .catch(err => dispatch(fetchUsersFailed(err.toString())));
};
