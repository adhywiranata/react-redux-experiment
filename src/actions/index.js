export const addUser = (name) => {
  return {
    type: 'ADD_USER',
    payload: name,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: 'FETCH_USER_SUCCESS',
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
