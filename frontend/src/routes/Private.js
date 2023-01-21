import React from 'react';
import { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import  { connect} from "react-redux"

const Private = ({ children, token }) => {
    let tokenData = localStorage.getItem("token-data");
   return token || tokenData  ? children : <Navigate to="/" />
}
const mapStateToProps = ({ login }) =>{
    return {
        token: login.loginDetails
    }
}
export default connect(mapStateToProps,null)(Private)