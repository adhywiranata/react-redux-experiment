import { FETCH_USER_SUCCESS, ADD_USER } from '../actions/actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_SUCCESS: {
      const newUsers = action.payload;
      return newUsers;
    }
    case ADD_USER: {
      const newUser = { name: action.payload };
      const newUsers = [...state, newUser];
      return newUsers;
    }
    default: return state;
  }
};

export default userReducer;
