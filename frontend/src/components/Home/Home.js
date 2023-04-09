import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../../pages/Dashboard/Dashboard';
import CreateProduct from '../../pages/Products/CreateProduct/CreateProduct';
import ProductList from '../../pages/Products/ProductList/ProductList';
import Private from '../../routes/Private';
import AddCategory from '../../pages/Categories/Add_caterories/AddCategory';
import CreateCategory from '../../pages/Categories/CreateCategory/CreateCategory';
import UpdateCategory from '../../pages/Categories/UpdateCategory/UpdateCategory';
import "../Home/Home.scss";


const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [categoryPagination, setCategoryPagination] = useState(1);

  // console.log(categoryPagination)

  return (
    <div className='home'>
      <div className='home--container'>
        <Header setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar} />
        <div className='home--sidebarDashboardDiv'>
            <Sidebar toggleSidebar={toggleSidebar} />
              <Routes>
              <Route path='/dashboard' element = {<Private><Dashboard /></Private>}/>
              <Route path='/products' element ={<Private><CreateProduct /></Private>}/>
              <Route path='/products/list' element={<Private><ProductList /></Private>}/>
              <Route path='/categories' element={<Private><AddCategory /></Private>} />
              <Route path='/categories/:page' element={<Private><AddCategory /></Private>} />
              <Route path='/categories/list' element={<Private><CreateCategory /></Private>}/>
              <Route path='/updateCategoey/:id' element={<Private><UpdateCategory /></Private>}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home