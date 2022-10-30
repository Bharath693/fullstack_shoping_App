import React from 'react';
import { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const Private = ({ children }) => {
    const token = useSelector((store) => store.userToken.registeredUserTokenData);
   return token ? children : <Navigate to="/" />
}

export default Private