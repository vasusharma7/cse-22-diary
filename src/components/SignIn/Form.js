import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";
import Axios from "axios";

const SignIn = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    username: "111803127",
    password: "730011103",
  });
  const [redirect, setRedirect] = useState(false);

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post("https://sleepy-harbor-98090.herokuapp.com/users", postData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("memories-auth-token", response.data.token);
        setRedirect(true);
      })
      .catch((err) => {
        alert("Authentication failure");
        console.log(err);
      });
  };

  const handlePassword = async(e)=>{
    if(!postData.username){
      alert("Please type in MIS and click me again !");
      return;
    }
    e.preventDefault();

    Axios.get(`https://sleepy-harbor-98090.herokuapp.com/users/password?mis=${postData.username}`,)
      .then((response) => {
        alert("Password sent to your college mail");
      })
      .catch((err) => {
        alert("Unable to send password at the moment");
        console.log(err);
      });
  }
   
  if (redirect) {
    return <Navigate to="/" />;
  } else {
    return (
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">{"Authentication"}</Typography>
          <TextField
            name="username"
            variant="outlined"
            label="MIS"
            fullWidth
            value={postData.username}
            onChange={(e) =>
              setPostData({ ...postData, username: e.target.value })
            }
          />
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            value={postData.password}
            onChange={(e) =>
              setPostData({ ...postData, password: e.target.value })
            }
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSubmit}
            fullWidth
            style={{ marginBottom: 10 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handlePassword}
            fullWidth
          >
            Don't know password ? 
          </Button>
        </form>
      </Paper>
    );
  }
};

export default SignIn;
