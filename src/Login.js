import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";
import { getUsers } from "./actions/users";
import SignIn from "./components/SignIn/Form";

const Login = () => {
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
    <>
      <Container maxWidth="lg" style={{ minHeight: "95vh" }}>
        <Grow in>
          <Container>
            <Grid container justify="center" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={5}>
                <SignIn currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default Login;
