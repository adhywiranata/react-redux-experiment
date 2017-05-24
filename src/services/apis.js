import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('http://localhost:1234/users');
};

export const addUser = (newUser) => {
  console.log(newUser);
  return axios({
    method: 'post',
    url: 'http://localhost:1234/users',
    data: newUser,
  });
};

export const fetchPosts = () => {
  return axios.get('http://localhost:1234/api/posts');
};
