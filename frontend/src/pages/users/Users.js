import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./User.scss";
import { connect } from 'react-redux';

const Users = () => {
  const [params] = useSearchParams()
  console.log(params.get('session_id'));
  return (
    <div className='userPage'>
      <Header />
      <div className="userHeaderBackgroundImg">
        <div className='userpage-myAccount-container'>
            My Account
        </div>
      </div>
      <div className="userpage-accountDetails">
        <div className=''>
          <NavLink to="/user" className="userpage-menu">
          <BsPersonCircle size={22}/>
            <span className="usepage-myAccountText">My Account</span>
          </NavLink>
          <NavLink to="/orders" className="userpage-menu">
          <AiOutlineShoppingCart size={22}/>
            <span className="usepage-myAccountText">orders</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Users