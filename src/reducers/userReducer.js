import { FETCH_USER_SUCCESS, ADD_USER_SUCCESS } from '../actions/actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_SUCCESS: {
      const newUsers = action.payload;
      return newUsers;
    }
    case ADD_USER_SUCCESS: {
      const id = Math.max(...state.map(post => post.id)) + 1;
      const newUser = { ...action.payload, id };
      const newUsers = [...state, newUser];
      return newUsers;
    }
    default: return state;
  }
};

export default userReducer;
