import {
  FETCH_USERS,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  ADD_USER,
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

export const addUser = newUser => ({
  type: ADD_USER,
  payload: newUser,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchUsersFailed = err => ({
  type: FETCH_USER_FAILED,
  payload: err,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
