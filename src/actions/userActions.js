import {
  FETCH_USER_SUCCESS,
  FETCH_USER_LOADING,
  FETCH_USER_FAILED,
  ADD_USER_SUCCESS
} from './constants';

export const addUserSuccess = newUser => ({
  type: ADD_USER_SUCCESS,
  payload: newUser,
});

export const addUser = newUser => (dispatch) => {
  fetch('http://localhost:1234/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser),
  })
    .then(res => res.json())
    .then(data => dispatch(addUserSuccess(newUser)))
    .catch(err => console.log(err));
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
