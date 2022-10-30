import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from '../pages/auth/Register/RegistrationForm';
import LoginForm from '../pages/auth/LoginPage/LoginForm';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Private from './Private';

const routing = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home/*' element={<Private><Home /></Private>}/>
     </Routes>
     {/* <Route path='/home/*' element={<Private><Home /></Private>}/> */}
     {/* <Home /> */}
    </BrowserRouter>
  )
}

export default routing