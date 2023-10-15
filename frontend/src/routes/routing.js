import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from '../components/auth/Register/RegistrationForm';
import LoginForm from '../components/auth/LoginPage/LoginForm';
import User from '../pages/users/Users';
import Home from '../components/Home/Home';
import HomePageProducts from '../components/HomePageProducts/HomePageProducts';

import Private from './Private';

const Routing = () => {
 
  return (
    <BrowserRouter>
     <Routes>
        {/* <Route path='/' element={<Navigate to="/login" replace />}/> */}
        <Route path='/' element={<HomePageProducts />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/user' element={<Private><User /></Private>}/>
        <Route path='/home/*' element={<Private><Home /></Private>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Routing