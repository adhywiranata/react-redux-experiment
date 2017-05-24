import {
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from '../actions/constants';

const initialState = {
  users: [],
  isFetching: false,
  fetchError: false,
  fetchErrorMessage: '',
  isUpdating: false,
  isUpdated: false,
  updateError: false,
  updateDataErrorMessage: '',
};

const fetchUserLoading = (state) => {
  return { ...state, isFetching: true };
}

const fetchUser = (state, payload) => {
  return { ...state, users: payload, isFetching: false };
};

const fetchUserFailed = (state, payload) => {
  return { ...state, isFetching: false, fetchError: true, fetchErrorMessage: payload.toString() };
};

const addUserLoading = (state) => {
  return { ...state, isUpdating: true };
};

const addUser = (state, payload) => {
  const id = Math.max(...state.users.map(user => user.id)) + 1;
  const newUser = { ...payload, id };
  const newUsers = [...state.users, newUser];
  return { ...state, users: newUsers, isUpdating: false, isUpdated: true };
};

const addUserFailed = (state, payload) => {
  return { ...state, isUpdating: false, updateError: true, updateDataErrorMessage: payload.toString() };
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_LOADING: return fetchUserLoading(state)
    case FETCH_USER_SUCCESS: return fetchUser(state, action.payload)
    case FETCH_USER_FAILED: return fetchUserFailed(state, action.payload)
    case ADD_USER_LOADING: return addUserLoading(state)
    case ADD_USER_SUCCESS: return addUser(state, action.payload)
    case ADD_USER_FAILED: return addUserFailed(state, action.payload)
    default: return state;
  }
};

export default userReducer;
