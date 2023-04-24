import React,{useState} from 'react';
import { TextField } from '@mui/material';
import "./InputField.scss";

const Inputfield = (props) => {
  //  const [inputValue, setInputValue] = useState("");

   const handleInputChange = (e) =>{
        if(props.handleTextFieldValue !== undefined) {
          props.handleTextFieldValue(e)
        }
   }

  return (
    <div className='inputField'>
        <TextField 
         placeholder={props.placeholder}
         name={props.name}
         type={props.type}
         value={props.userDetails}
         onChange={handleInputChange}
         className="inputField--Input"
        />
    </div>
  )
}

export default Inputfield