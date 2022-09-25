import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";
import { getUsers } from "./actions/users";
import Main from "./Main.js";
import Login from "./Login.js"
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [url, setURL] = useState(undefined);

  useEffect(() => {
    const search = window.location.search;
    search.split("&").forEach((item) => {
      const [key, value] = item.split("=");
      if (key === "?for") {
        setURL(value);
        dispatch(getPosts());
      }
    });
    dispatch(getUsers());
  }, [currentId, dispatch]);

  return (
   <Main/>
  );
};

export default App;
