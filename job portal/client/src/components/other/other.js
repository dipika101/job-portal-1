import React from "react";
import { Navigate } from "react-router-dom";

import Auth from "../Auth/Auth";
import AdminSignUp from "../admin/adminAuth";

const Other =()=>{
    const user =JSON.parse(localStorage.getItem('profile'));

    return((!user) ? <Auth /> : <Navigate replace to="/posts" />);
}

export default Other;