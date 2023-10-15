import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import  { connect} from "react-redux"

const Private = ({ children, token }) => {
    let tokenData = localStorage.getItem("token-data");
   return token || tokenData  ? children : <Navigate to="/login" />
}
const mapStateToProps = ({ login }) =>{
    return {
        token: login.loginDetails
    }
}
export default connect(mapStateToProps,null)(Private)