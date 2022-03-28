import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { deletePost } from "../../../actions/posts";

const Post=({post, setCurrentId})=>{
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const openPost=(e)=>{
      navigate(`/posts/${post._id}`);
    }

    return(
        <Card className={classes.card}>
          <ButtonBase className={classes.cardAction} onClick={openPost}>
            <CardMedia component="iframe" src={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.profile}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">{post.pro}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{post.status}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{post.location}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
          </ButtonBase>
          <CardActions className={classes.cardActions}>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button onClick={() => setCurrentId(post._id)} style={{ color: 'blue' }} size="small">
                <MoreHorizIcon fontSize="small" /> EDIT
              </Button>
          
            )}
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize="small" /> Delete
              </Button>
            )}
            {/* {(user?.result?.googleId !== post?.creator ) && (
              <Button component={Link} to={user ?(`/posts/${post._id}`):('/')}size="small" color="secondary" >
                APPLY
              </Button>
            )} */}
      </CardActions>
    </Card>
    );
}

export default Post;