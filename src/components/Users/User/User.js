import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { likePost, deletePost, setUser } from "../../../actions/users";
import useStyles from "./styles";

const User = ({ user, setCurrentId }) => {
  const dispatch = useDispatch();
  const [navigate, setNavigate] = React.useState(false);
  const classes = useStyles();
  // https://source.unsplash.com/200x200?users&?sig=${user.mis}
  if (navigate) {
    return <Navigate to={`/posts?for=${user.mis}`} />;
  }
  return (
    <Card className={classes.card} onClick={() => {  localStorage.setItem("for",user.name);setNavigate(true);}} >
      <CardMedia
        className={classes.media}
        image={`https://picsum.photos/200/200?random=${user.mis}`}
        title={user.mis}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{user.mis}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(user._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {user.name}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default User;
