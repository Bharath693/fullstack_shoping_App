import React from 'react';
import { TextField } from '@mui/material';
import "./InputField.scss";

const Inputfield = (props) => {
  //  const [inputValue, setInputValue] = useState("");

   const handleInputChange = (e) =>{
        if(props.getUserDetails !== undefined) {
          props.getUserDetails(e)
        }
   }

  return (
    <div className='inputField'>
        <TextField 
         placeholder={props.placeholder}
         name={props.Name}
         type={props.type}
         value={props.userDetails}
         onChange={handleInputChange}
         className="inputField--Input"
        />
    </div>
  )
}

export default Inputfield