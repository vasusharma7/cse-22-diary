import { FETCH_ALL_U, CREATE_U, UPDATE_U, DELETE_U, LIKE_U,SET_U } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_U:
      return action.payload;
    case LIKE_U:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case CREATE_U:
      return [...users, action.payload];
    case UPDATE_U:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case DELETE_U:
      return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};

