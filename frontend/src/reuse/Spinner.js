import React, { useState } from 'react'
import "./Spinner.scss";

const Spinner = (props) => {
 
  return (
    <>
      {props.spinner ?
          <div className='grid place-items-center'>
            <div className="w-[60px] h-[60px] rounded-full border-[5px] border-t-black/20 animate-spin">Spinner</div>
          </div>
        :
        ""
      }
    </>

  )
}

export default Spinner