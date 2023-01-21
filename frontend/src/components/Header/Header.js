import React, { useEffect, useState } from 'react';
import Button from "../../reuse/Button";
import menu_icon from "../../assests/menu-icon.jpg"
// import { logOutUser } from "../../ReduxStore/dispatchers/getRegisteredUserToken";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { removeUserToken } from "../../pages/auth/LoginPage/store/dispatcher";
import { connect } from 'react-redux'
import "../Header/Header.scss";

const Header = ({logOutUser},props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
   const handleSidebarToggle = () =>{
       props.setToggleSidebar(!props.toggleSidebar)
   }
   
   const handleLogout = () =>{
    // localStorage.removeItem("token-data");
    // document.cookie = JSON.stringify(`token=null`)
      logOutUser()
      navigate("/");
   }

  
  return (
    <div className='bg-orange-400 py-3 navbar'>
      <div className='w-full flex justify-between items-center navbar--header'>
        <div className='justify-start' onClick={handleSidebarToggle}>
          {/* <span className='navbar--header--menu'></span> */}
          <img src={menu_icon} alt="Menu" className='ms-2 navbar--header--menu'/>
        </div>
        <div className='flex mr-2 justify-end'>
           <Button label = "Logout" className="" type="button" handleClick={handleLogout}/>
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) =>{
  return {
    logOutUser: () => dispatch(removeUserToken())
  }
}
export default connect(null,mapDispatchToProps)(Header)