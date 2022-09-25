import {
  FETCH_ALL_U,
  CREATE_U,
  UPDATE_U,
  DELETE_U,
  LIKE_U,
  SET_U,
} from "../constants/actionTypes";

import * as api from "../api/index.js";
const titleCase = (str) => {
  let sentence = str.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
};
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL_U, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: SET_U, payload: titleCase(user) });
  } catch (error) {
    console.log(error.message);
  }
};

export const resetUser = () => async (dispatch) => {
  try {
    dispatch({ type: SET_U, payload: "CSE'22 Memories" });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (User) => async (dispatch) => {
  try {
    const { data } = await api.createUser(User);

    dispatch({ type: CREATE_U, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, User) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, User);

    dispatch({ type: UPDATE_U, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeUser(id);

    dispatch({ type: LIKE_U, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE_U, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
