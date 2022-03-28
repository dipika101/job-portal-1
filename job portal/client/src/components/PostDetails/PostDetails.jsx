import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Button } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Application from '../application/application';
import { getPost, getPostsBySearch } from '../../actions/posts';
// import CommentSection from './CommentSection';
import useStyles from './styles';

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  // useEffect(() => {
  //   if (post) {
  //     dispatch(getPostsBySearch({ search: 'none'}));
  //   }
  // }, [post]);

  if (!post) return null;


  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }



  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Job Profile: {post.pro}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Status: {post.status}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Location: {post.location}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Job Description: {post.description}</Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          
            
              <Divider style={{ margin: '20px 0' }} />
                <Application post={post}/>
                
               
              <Divider style={{ margin: '20px 0' }} />
           
        </div>
        <div className={classes.imageSection}>
          <iframe className={classes.media} src={post.selectedFile } alt={post.title} />
        </div>
      </div>
    </Paper>
  );
};

export default PostDetails;