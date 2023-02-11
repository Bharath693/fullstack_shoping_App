import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as dispatcher from "../pages/Categories/store/dispatchers";
import "./Pagination.scss";

const Pagination = ({
  pagination,
  pageNum,
  setPageNum,
  getCategoryDataApi,
  getCategoryDetails,
}) => {
  const navigate = useNavigate();
  let totalPages = [];
  const [path, setPath] = useState("");
  for (let i = 0; i < Math.round(pagination?.count / 3); i++) {
    totalPages.push(i);
  }

  const handlePageChange = (pageNum) => {
    setPageNum(pageNum + 1);
    navigate(`/home/categories/${pageNum+1}`)
    getCategoryDataApi(pageNum+1)
  };

  console.log(pageNum);
  console.log(path);
  console.log(getCategoryDetails)
  return (
    <div className="paginationMain">
      {totalPages &&
        totalPages.map((item) => (
          <div className="pages" onClick={() => handlePageChange(item)}>
            {item + 1}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = ({ category }) => {
  return {
    getCategoryDetails: category.categoryDetails,
    categoryDetailsSuccess: category.categoryDetailsSuccess,
    categoryDetailsInProgress: category.categoryDetailsInProgress,
  };
};

export default connect(mapStateToProps, dispatcher)(Pagination);
