import React, { useEffect, useState } from "react";
import Inputfield from "../../../reuse/inputfield";
import Button from "../../../reuse/Button";
import { postApiCalling } from "../../../service/AuthService";
import { getRegisteredUserToken } from "../../../ReduxStore/dispatchers/getRegisteredUserToken";
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getToken } from "./store/dispatcher";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./LoginForm.scss";
import Header from "../../Header/Header";

const LoginForm = ({ loginData, token }) => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
 
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const getUserLoginDetsils = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //   const loginUserData = await postApiCalling("/login",userDetails);
    await loginData(userDetails);
    //   if(loginUserData){
    //     document.cookie =  JSON.stringify(`token=${loginUserData?.data?.token}`)
    //     localStorage.setItem("token-data",loginUserData?.data?.token)
    //     dispatcher(getRegisteredUserToken(loginUserData));
    //     navigate("/home/dashboard");
    //   }
  };
  if (token) {
    localStorage.setItem("token-data", token);
    // document.cookie = JSON.stringify(`token=${token}`)
    const cookies = new Cookies();
    cookies.set("token", token);
    // document.cookie = "token="+token
    navigate("/user");
  }
  // console.log(localStorage.getItem("token-data"))

  return (
    <motion.div
      initial={{opacity: 0, x: "-100vw"}}
      animate={{opacity: 1, x: 0}}
    >
      <Header />
      <div className="LoginFormHeaderBackgroundImg"></div>
      <div 
      
      className='"bg-green-500 w-full  flex flex-col items-center LoginForm'
      >
        <div className="loginFormMain">
          <form onSubmit={handleSubmit}>
            <div className="grid-rows-1 Login--Container">
              <h4 className="text-center">Login</h4>
              <div className="grid-cols-1 mb-4">
                <Inputfield
                  name="email"
                  placeholder="Email"
                  type="text"
                  value={userDetails.email}
                  handleTextFieldValue={getUserLoginDetsils}
                />
              </div>
              <div className="grid-cols-1 mb-4">
                <Inputfield
                  name="password"
                  placeholder="Password"
                  type="text"
                  value={userDetails.password}
                  handleTextFieldValue={getUserLoginDetsils}
                />
              </div>
              <div className="Login--Container--LoginBtnDiv">
                <Button
                  label="Login"
                  className="Register/Login"
                  type="submit"
                />
              </div>
              
              <div className="LoginForm--Container--RegisterLink">
                <label>
                  Do not have an account{" "}
                  <Link to="/register" className="RegisterLink">
                    Register?
                  </Link>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginData: (userDetails) => dispatch(getToken(userDetails)),
  };
};

const mapStateToProps = ({ login }) => {
  return {
    token: login.loginDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);