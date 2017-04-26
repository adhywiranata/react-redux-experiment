const initialState = [
  { name: 'Sam' },
  { name: 'Joe' },
  { name: 'Mann' },
]

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER': {
      const newUser = { name: action.payload };
      const newUsers = [...state, newUser];
      return newUsers;
    }
    default: return state;
  }
};

export default userReducer;
