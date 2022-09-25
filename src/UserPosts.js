import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";
import { getUsers, setUser } from "./actions/users";
import Axios from "axios";
import { Navigate } from "react-router-dom";
const UserPosts = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [url, setURL] = useState(undefined);
  const [navigate,setNavigate] = useState(false);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  React.useEffect(()=>{
    Axios.get("https://sleepy-harbor-98090.herokuapp.com/users/check",{headers: {'memories-auth-token': localStorage.getItem('memories-auth-token')}}).then(res=>{
      console.log(res);
      setNavigate(false)
    }).catch(err=>{
      console.log(err);
      setNavigate(true)
    })
  },[navigate])
  
  if(navigate){
    return <Navigate to="/login"/>
  }else
  return (
    <>
      <Grid item xs={12} sm={4} style={{minHeight:"100vh"}}>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Posts setCurrentId={setCurrentId} />
      </Grid>

    </>
  );
};

export default UserPosts;
