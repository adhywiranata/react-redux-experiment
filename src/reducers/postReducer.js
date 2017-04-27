import { FETCH_POST_SUCCESS } from '../actions/actionTypes';

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POST_SUCCESS: {
      const newPosts = action.payload;
      return newPosts;
    }
    default: return state;
  }
};

export default postReducer;
