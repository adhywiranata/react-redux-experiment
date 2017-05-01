import {
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  ADD_USER_SUCCESS,
} from '../actions/constants';

const initialState = {
  users: [],
  isFetching: false,
  fetchError: false,
  fetchErrorMessage: '',
};

const fetchUserStartLoading = (state) => {
  return { ...state, isFetching: true }
}

const fetchUser = (state, payload) => {
  return { ...state, users: payload, isFetching: false };
};

const fetchUserFailed = (state, payload) => {
  return { ...state, isFetching: false, fetchError: true, fetchErrorMessage: payload };
};

const addUser = (state, payload) => {
  const id = Math.max(...state.users.map(user => user.id)) + 1;
  const newUser = { ...payload, id };
  const newUsers = [...state, newUser];
  return { ...state, users: newUsers };
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_LOADING: return fetchUserStartLoading(state)
    case FETCH_USER_SUCCESS: return fetchUser(state, action.payload)
    case FETCH_USER_FAILED: return fetchUserFailed(state, action.payload)
    case ADD_USER_SUCCESS: return addUser(state, action.payload)
    default: return state;
  }
};

export default userReducer;
