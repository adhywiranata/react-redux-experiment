import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('http://localhost:1234/users');
};

export const addUser = (newUser) => {
  return axios({
    method: 'post',
    url: 'http://localhost:1234/users',
    data: newUser,
  });
};

export const fetchPosts = () => {
  return axios.get('http://localhost:1234/api/posts');
};

export const addPost = (newPost) => {
  newPost.createdAt = new Date().toISOString();
  return axios({
    method: 'post',
    url: 'http://localhost:1234/posts',
    data: newPost,
  })
}
