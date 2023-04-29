import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./TextEditor.scss";

const TextEditor = (props) => {

  const handleChange = (e) =>{
       if(props.setValue !== undefined) {
           props.setValue(e)
       }
  }

  return (
    <div className='TextEditor'>
        <ReactQuill 
        theme="snow" 
        placeholder='Description...'
        value={props.value}
        name="description"
        onChange={handleChange}
        />
    </div>
  )
}

export default TextEditor