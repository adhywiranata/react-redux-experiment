import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('http://localhost:1234/users')
};
