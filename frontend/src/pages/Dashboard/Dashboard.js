import React, { useState } from 'react';
import "./Dashboard.scss";

const Dashboard = () => {
  const [displayCategory, setDisplayCategory] = useState("addCategory");
 
  return (
    <div className='Dashboard'>
        Dashboard
    </div>
  )
}

export default Dashboard