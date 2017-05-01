import { FETCH_POST_SUCCESS, ADD_POST_SUCCESS } from '../actions/constants';

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POST_SUCCESS: {
      const newPosts = action.payload;
      return newPosts;
    }
    case ADD_POST_SUCCESS: {
      const id = Math.max(...state.map(post => post.id)) + 1;
      const newPost = { ...action.payload, id };
      const newPosts = [...state, newPost];
      return newPosts;
    }
    default: return state;
  }
};

export default postReducer;
