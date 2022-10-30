import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Products from '../../pages/Products/Products';
import Private from '../../routes/Private';
import CategoryMain from '../../pages/Categories/CategoryMain';
import "../Home/Home.scss";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

 
  return (
    <div className='home'>
      <div className='home--container'>
        <Header setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar} />
        <div className='home--sidebarDashboardDiv'>
            <Sidebar toggleSidebar={toggleSidebar} />
              <Routes>
              <Route path='/dashboard' element = {<Private><Dashboard /></Private>}/>
              <Route path='/products' element ={<Private><Products /></Private>}/>
              <Route path='/categories' element={<Private><CategoryMain /></Private>} />
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home