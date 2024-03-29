import React, { useEffect, useState } from 'react';
import Button from "../../reuse/Button";
import menu_icon from "../../assests/menu-icon.jpg"
import HomeLogo from '../../assests/Myntra.jpeg';
import { BsHandbag, BsSearch } from 'react-icons/bs'
// import { logOutUser } from "../../ReduxStore/dispatchers/getRegisteredUserToken";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { removeUserToken } from "../auth/LoginPage/store/dispatcher";
import { connect } from 'react-redux'
import "../Header/Header.scss";

const Header = ({logOutUser, logOutSuccess},props) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
   const handleSidebarToggle = () =>{
       props.setToggleSidebar(!props.toggleSidebar)
   }
   
   const handleLogout = () =>{
    // localStorage.removeItem("token-data");
    // document.cookie = JSON.stringify(`token=null`)
      logOutUser()
      navigate("/login");
   }

  
  return (
    <div className='bg-orange-400 py-3 navbar'>
      <div className='navbar--header'>
        <div className='HomeImageMain' onClick={handleSidebarToggle}>
          {/* <span className='navbar--header--menu'></span> */}
          <Link to="/"><img src={HomeLogo} alt="Menu" className='navbar--header--menu'/></Link>
        </div>
        <div className='flex mr-2 justify-end w-50'>
          <div className='navbarRight'>
            <BsSearch className='navbarSearchMain'/>
            <div className='navbarCartMain'>
            <BsHandbag className='searchIcon'/>
            <span className='navbarCartCount'>10</span>
            </div>
          </div>
          {logOutSuccess ? 
          ""
          : 
          <Button label = "Logout" className="" type="button" handleClick={handleLogout}/>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ login }) =>{
  return {
    logOutSuccess: login.logOutUserSuccess
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    logOutUser: () => dispatch(removeUserToken())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)