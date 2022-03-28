import React from 'react';
import { Avatar, Button, Paper, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

const SignUp = () => {
  
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ 'Sign in' }</Typography>
        <Button component={Link} to='admin' type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Login as Admin
          </Button>
          <Button component={Link} to='applicant' type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Login as Applicant
          </Button>
        </Paper>
        </Container>
  );
};

export default SignUp;