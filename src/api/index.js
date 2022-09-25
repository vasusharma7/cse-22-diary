import axios from "axios";

const postsUrl = `https://sleepy-harbor-98090.herokuapp.com/posts`;
const usersUrl = `https://sleepy-harbor-98090.herokuapp.com/users?for=${window.location.search
  .split("=")
  .pop()}`;

export const fetchPosts = () =>
  axios.get(`${postsUrl}?for=${window.location.search.split("=").pop()}`, {
    headers: {
      "memories-auth-token": localStorage.getItem("memories-auth-token"),
    },
  });
export const createPost = (newPost) =>
  axios.post(
    `${postsUrl}?for=${window.location.search.split("=").pop()}`,
    newPost,
    {
      headers: {
        "memories-auth-token": localStorage.getItem("memories-auth-token"),
      },
    }
  );
export const likePost = (id) =>
  axios.patch(`${postsUrl}/${id}/likePost`, {
    headers: {
      "memories-auth-token": localStorage.getItem("memories-auth-token"),
    },
  });
export const updatePost = (id, updatedPost) =>
  axios.patch(`${postsUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postsUrl}/${id}`);

export const fetchUsers = () => axios.get(usersUrl);
export const createUser = (newUser) => axios.post(usersUrl, newUser);
export const likeUser = (id) => axios.patch(`${usersUrl}/${id}/likeUser`);
export const updateUser = (id, updatedUser) =>
  axios.patch(`${usersUrl}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${usersUrl}/${id}`);
