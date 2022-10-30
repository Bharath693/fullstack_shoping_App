import React from 'react';
import { Button } from '@mui/material';
import "./Buttons.scss"

const ReusableButton = (props) => {

  const handleButton = () =>{
    if(props.handleLogout !== undefined){
        props.handleLogout();
    }
  }
  return (
    <div className="Button">
        <Button variant='contained' 
        className={props.className === "Register/Login" ? "Button--RegisterButton" : "buttonOther"}
        type={props.type}
        onClick={handleButton}
        >
           {props.label}
        </Button>
    </div>
  )
}

export default ReusableButton