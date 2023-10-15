import React, { useState } from "react";
import Inputfield from "../../../reuse/inputfield";
import Button from "../../../reuse/Button";
import { postApiCalling } from "../../../service/AuthService";
import { getRegisteredUserToken } from "../../../ReduxStore/dispatchers/getRegisteredUserToken";
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import Header from "../../Header/Header";

const Register = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  // used this state to post the data of the Registered user to an api
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    password: "",
  });

  //used this state to check whether the data is loaded or not
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const getRegisterUser = (e) => {
    setUserRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registeredUserData = await postApiCalling(
      "/register",
      userRegistration
    );
    if (registeredUserData) {
      localStorage.setItem("token-data", registeredUserData?.data?.token);
      dispatcher(getRegisteredUserToken(registeredUserData));
      navigate("/home");
    }
  };

  // console.log(userRegistration)
  return (
    <motion.div
    initial={{opacity: 0, x: "-100vw"}}
    animate={{opacity: 1, x: 0}}
    >
        <Header />
        <div className="RegistrationFormHeaderBackgroundImg"></div>
      <div className="w-full flex flex-col items-center Register">
        <div className="RegisterFormMain">
          <form onSubmit={handleSubmit}>
            <div className="grid-rows-1">
              <h4 className="text-center">Register</h4>
              <div className="grid-cols-1 mb-2">
                <Inputfield
                  Name="name"
                  placeholder="Name"
                  type="text"
                  userDetails={userRegistration.name}
                  getUserDetails={getRegisterUser}
                />
              </div>
              <div className="grid-cols-1 mb-2">
                <Inputfield
                  Name="email"
                  placeholder="Email"
                  type="text"
                  userDetails={userRegistration.email}
                  getUserDetails={getRegisterUser}
                />
              </div>
              <div className="grid-cols-1 mb-2">
                <Inputfield
                  Name="password"
                  placeholder="Password"
                  type="password"
                  userDetails={userRegistration.password}
                  getUserDetails={getRegisterUser}
                />
              </div>
              <div className="Register--buttonDiv">
                <Button
                  label="Register"
                  className="Register/Login"
                  type="submit"
                />
              </div>
              <div className="Register--LoginLink">
                <label>
                  All ready have an account
                  <Link to="/login" className="LoginLink">
                    Login?
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

export default Register;