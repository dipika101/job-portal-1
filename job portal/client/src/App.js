import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom';

import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Other from './components/other/other';
import PostDetails from './components/PostDetails/PostDetails';
import AdminSignUp from './components/admin/adminAuth';
import ApplicantSignUP from './components/applicants/applicantAuth';
// import Application from './components/application/application';
import Success from './components/application/success';


const App = () => {
  

  return(
  <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/search" element={<Home/>} />
        <Route path="/posts/:id" element={<PostDetails/>} />
        <Route path="/auth" element={<Other/>} />
        <Route path="/auth/admin" element={<AdminSignUp/>} />
        <Route path="/auth/applicant" element={<ApplicantSignUP/>} />
        {/* <Route path="/posts/applyPost/:id" element={<Application/>} /> */}
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Container>
  </BrowserRouter>
  );
};

export default App;