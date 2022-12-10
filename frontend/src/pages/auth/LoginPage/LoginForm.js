import React, { useState } from 'react';
import Inputfield from '../../../reuse/inputfield';
import Button from '../../../reuse/Button';
import { postApiCalling } from "../../../service/AuthService";
import { getRegisteredUserToken } from "../../../ReduxStore/dispatchers/getRegisteredUserToken";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import "./LoginForm.scss";

const LoginForm = () => {
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const getUserLoginDetsils = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = async (e) =>{
          e.preventDefault();
          const loginUserData = await postApiCalling("/login",userDetails);
          if(loginUserData){
            document.cookie = loginUserData?.data?.token
            localStorage.setItem("token-data",loginUserData?.data?.token)
            dispatcher(getRegisteredUserToken(loginUserData));
            navigate("/home/dashboard");
          }
    }
   
    return (
        <div className='"bg-green-500 w-full h-screen flex flex-col justify-center items-center LoginForm'>
            <form onSubmit={handleSubmit}>
                <div className='grid-rows-1 Login--Container'>
                    <h4 className='text-center'>Login</h4>
                    <div className='grid-cols-1 mb-2'>
                        <Inputfield
                            Name="email"
                            placeholder="Email"
                            type="text"
                            userDetails={userDetails.email}
                            getUserDetails={getUserLoginDetsils}
                        />
                    </div>
                    <div className='grid-cols-1 mb-2'>
                        <Inputfield
                            Name="password"
                            placeholder="Password"
                            type="text"
                            userDetails={userDetails.password}
                            getUserDetails={getUserLoginDetsils}
                        />
                    </div>
                    <div className='Login--Container--LoginBtnDiv'>
                      <Button label = "Login" className="Register/Login" type="submit"/>
                    </div>
                    <div className='LoginForm--Container--RegisterLink'>
                        <label>Do not have an account <Link to='/register' className='RegisterLink'>Register?</Link></label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm