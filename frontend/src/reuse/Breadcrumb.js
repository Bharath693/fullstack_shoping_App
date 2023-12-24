import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = ({ breadCrumbData }) => {
  return (
    <div className="breadcrumb">
      {breadCrumbData &&
        breadCrumbData.map((item) => {
          return (
            <div className="breadcrumb-container">
              <Link to={item.path} className="capitalize">{item.Name}</Link> 
              <span className="breadcrumb-container-icon">{item.icon}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Breadcrumb;