import * as ActionTypes from './actionTypes';

export const addUser = (name) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: name,
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
