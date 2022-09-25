import { FETCH_ALL_P, CREATE_P, UPDATE_P, DELETE_P, LIKE_P } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_P:
      return action.payload;
    case LIKE_P:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE_P:
      return [...posts, action.payload];
    case UPDATE_P:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE_P:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

