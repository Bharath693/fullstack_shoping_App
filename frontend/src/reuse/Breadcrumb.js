import React from 'react'
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = ({ breadCrumbData }) => {
  return (
    <div className='breadcrumb'>
      {breadCrumbData && breadCrumbData.map((item) =>{
        return(
          <ul className='breadcrumb-container'>
             <li>
              <Link to={item.path}>{item.Name}</Link>
             </li>
          </ul>
        )
      })}
        <div></div>
    </div>
  )
}

export default Breadcrumb