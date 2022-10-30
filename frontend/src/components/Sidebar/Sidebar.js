import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { sidebarData } from "../../data/data";
import "../Sidebar/Sidebar.scss"

const Sidebar = (props) => {
  const [sidebarActive, setSidebarActive] = useState("Dashboard");

  const changeSidebarLink = (sidebarLink) => {
    setSidebarActive(sidebarLink)
  }

  return (
    <>
      <div className='sidebarContainer'>
        <div className={`${props.toggleSidebar ? "toggleSidebar" : "sidebar"}`}>
          {sidebarData.map((item, index) => {
            return (
              <ul
                className={`${sidebarActive === item.Name ? "sidebar--Active" : "sidebar--list"}`}
                key={index}
              >
                <Link
                  to={`${item.route}`}
                  className={`${sidebarActive === item.Name ? "flex items-center sidebar--Active--Link" : "flex items-center sidebarContainer--sidebar--list--linkTag"}`} 
                  onClick={() => changeSidebarLink(item.Name)}>
                  <li
                    className='mr-2 text-white inline-block'>{item.icon}
                  </li>
                  <li
                    className='text-white ml-2'>{item.Name}
                  </li>
                </Link>
              </ul>
            )
          })}
        </div>
        {/* <div className="sidebar">
          {sidebarData.map((item, index) => {
            return (
              <ul className='flex items-center sidebar--list' key={index}>
                <li className='mr-2 text-white inline-block'>{item.icon}</li>
                <li className='text-white'>{item.Name}</li>
              </ul>
            )
          })}
        </div> */}
      </div>
    </>
  )
}
// w-64 bg-gray-500 h-screen sidebar
export default Sidebar