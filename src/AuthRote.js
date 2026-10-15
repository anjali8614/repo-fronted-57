import React from "react";
import {Navigate} from "react-router-dom";
const AuthRoute = ({ childern}) => {

    const token = localStorage.getItem('token')
    return token?childern:<Navigate to  = "/login"/>
}
export default AuthRoute