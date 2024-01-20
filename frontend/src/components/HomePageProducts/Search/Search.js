import React from "react";
import {  BsSearch } from 'react-icons/bs'
import "./Search.scss";

const Search = () => {
  return (
    <div className="Search">
      <div className="w-full flex align-middle"> 
        <input
            type="text"
            name=""
            className="w-full h-[38px] searchInput"
            placeholder="Search Products..."
          />
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
