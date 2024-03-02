import React, { useEffect } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { verify_paymnets } from "./store/dispatcher.js"
import { connect } from 'react-redux';

//css file
import "./User.scss";

const Users = ({verifyPayment}) => {
  const [params] = useSearchParams();
  let id = params.get('session_id');
 
  useEffect(() =>{
     if(id !== undefined) {
      verifyPayment(id);
     }
  },[id, verifyPayment])

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

const mapDispatchToProps = (dispatch) =>{
   return {
    verifyPayment:(id) => dispatch(verify_paymnets(id))
   }
}

export default connect(null, mapDispatchToProps)(Users)