import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";
import { getUsers } from "./actions/users";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import UserPosts from "./UserPosts";
import Login from "./Login";
import UsersMain from "./Users";
const Main = () => {
  const [navigate, setNavigate] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const title = useSelector((state) => {
    return state.utils.title;
  });
  const [show,setShow] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("memories-auth-token"))
    setShow(true);
    else setShow(false);
  });
  const [url, setURL] = useState(undefined);
  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h3" align="center">
            {title}
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/posts" element={<UserPosts />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/" element={<UsersMain />} />
                </Routes>
              </BrowserRouter>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <div className={classes.footer}>
        <Typography variant="h6" align="center">
          Made with Procrastination by Vasu :p
          { show && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                window.location.reload();
              }}
              style={{ marginLeft: "50px",borderTop:'25px',borderBottom:'25px' }}
            >
              Logout
            </Button>
          )}
          
        </Typography>
      </div>
    </>
  );
};

export default Main;
