import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title : '', description : '', pro : '', status : '', location : '', selectedFile : ''});
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  // const email = user.map((value)=>{
  //   return{
  //     email: this.state.email
  //   }
  // })
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title : '', description : '', pro : '', status : '', location : '', selectedFile : '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.email) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to Post of Edit Jobs.
        </Typography>
      </Paper>
    );
  }

  return(
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Edit' : 'Create'} job post</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({ ...postData, title: e.target.value})}/>
            <TextField name="description" variant="outlined" rows={4} label="Description" fullWidth value={postData.description} onChange={(e)=> setPostData({ ...postData, description: e.target.value})} multiline/>
            <TextField name="pro" variant="outlined" label="Profile" fullWidth value={postData.pro} onChange={(e)=> setPostData({ ...postData, pro: e.target.value})}/>
            <TextField name="status" variant="outlined" label="Status" fullWidth value={postData.status} onChange={(e)=> setPostData({ ...postData, status: e.target.value})}/>
            <TextField name="location" variant="outlined" label="Location" fullWidth value={postData.location} onChange={(e)=> setPostData({ ...postData, location: e.target.value})}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
    );
};

export default Form;