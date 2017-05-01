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
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_LOADING: {
      return { ...state, isFetching: true }
    }
    case FETCH_USER_SUCCESS: {
      return { ...state, users: action.payload, isFetching: false };
    }
    case ADD_USER_SUCCESS: {
      const id = Math.max(...state.users.map(user => user.id)) + 1;
      const newUser = { ...action.payload, id };
      const newUsers = [...state, newUser];
      return { ...state, users: newUsers };
    }
    default: return state;
  }
};

export default userReducer;
