import React from "react";
import { Grid, CircularProgress, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "@material-ui/core";
import User from "./User/User";
import useStyles from "./styles";
import { resetUser } from "../../actions/users";

const Users = ({ setCurrentId }) => {
  const users = useSelector((state) => state.users);
  const [data,setData] = React.useState(users);
  React.useEffect(()=>{
    setData(users);
  },[users]);
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetUser());
  });
  return !users.length ? (
    <CircularProgress />
  ) : (
    <>
      <div className={classes.main}>
        <div className={classes.search}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search by Name"
            onChange={(e)=> {if(e.target.value!=="") {
              setData(users.filter((user)=>{
               return user.name.toLowerCase().includes(e.target.value)
              }));
            }else{
              setData(users);
            } }}
          />
        </div>
      </div>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {data.map((user) => (
          <Grid key={user._id} item xs={12} sm={3} md={3}>
            <User user={user} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Users;
