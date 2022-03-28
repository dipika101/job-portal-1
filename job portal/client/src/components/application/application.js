import React, {useState, useRef} from "react";
import { TextField, Button, FormControlLabel, Radio,  RadioGroup, Typography, Paper, Avatar, Grid, Container } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FileBase from 'react-file-base64';
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";
import {applicationPost} from '../../actions/posts'; 
import {Success} from './success';
const initialState = {email:'', name:'', contact:'', rollnumber : '', percentage10 : '', percentage12 : '', percentageGrad : '', techinaclSkill: '', selectedFile1 : '' };

  const Application =({post})=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [application, setApplication] = useState(initialState);
  const user = JSON.parse(localStorage.getItem('profile'));


const handleSubmit =async(e)=>{

  e.preventDefault();

  const newapp = (email, name, contact, rollnumber, percentage10, percentage12, percentageGrad, techinaclSkill, selectedFile1)=>{
    return{email: email,
      name: name,
      contact: contact,
      rollnumber : rollnumber,
      // qualification: qualification,
      percentage10 : percentage10,
      percentage12 : percentage12,
      percentageGrad : percentageGrad, 
      techinaclSkill: techinaclSkill, 
      selectedFile1 : selectedFile1,};
  };
  const a=newapp(application.email, user?.result?.name, application.contact, user?.result?.rollnumber, application.percentage10, application.percentage12, application.percentageGrad, application.techinaclSkill, application.selectedFile1);
  
  const newapplication= await dispatch(applicationPost({...a},post._id));
}

const clear =() =>{

}

  return(
    <Container component="main" maxWidth="lg">
    <Paper className={classes.paper} elevation={6}>
      
      <Typography component="h1" variant="h5">APPLICATION FORM</Typography>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
      <TextField name="email" variant="outlined" label="Email Address" fullWidth value={application.email} onChange={(e)=> setApplication({ ...application, email: e.target.value})}/>
          <TextField name="contact" variant="outlined" label="Contact Number" fullWidth value={application.contact} onChange={(e)=> setApplication({ ...application, contact: e.target.value})}/>
          <RadioGroup aria-label="qualification" name="qualification" value={application.qualification} onChange={(e)=> setApplication({ ...application, qualification: e.target.value})}>
            <FormControlLabel value="pgEd" control={<Radio />} label="PG" />
            <FormControlLabel value="ugEd" control={<Radio />} label="UG" />
          </RadioGroup>
          <TextField name="percentage10" variant="outlined" label="10TH Percentage" fullWidth value={application.percentage10} onChange={(e)=> setApplication({ ...application, percentage10: e.target.value})}/>
          <TextField name="percentage12" variant="outlined" label="12TH Percentage" fullWidth value={application.percentage12} onChange={(e)=> setApplication({ ...application, percentage12: e.target.value})}/>
          <TextField name="percentageGrad" variant="outlined" label="Graduation Percentage" fullWidth value={application.percentageGrad} onChange={(e)=> setApplication({ ...application, percentageGrad: e.target.value})}/>
          <TextField name="techincalSkill" variant="outlined" label="Techinal Skills" fullWidth value={application.techinaclSkill} onChange={(e)=> setApplication({ ...application, techinaclSkill: e.target.value})}/>
          <Typography className={classes.note}>Upload Resume Down</Typography>
          <div style={{marginTop:'50px'}} className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64})=> setApplication({...application, selectedFile1: base64})}/></div>
          <Button style={{marginTop:'50px'}} className={classes.buttonSubmit} variant="contained" onClick={handleSubmit} color="primary" size="large" type="submit" fullWidth>Submit</Button>
          {/* <Button style={{marginTop:'50px'}} className={classes.buttonSubmit} variant="contained" component={Link} to='/success' color="primary" size="large" type="submit" fullWidth>Submit</Button> */}
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  </Container>
  );
}

export default Application;