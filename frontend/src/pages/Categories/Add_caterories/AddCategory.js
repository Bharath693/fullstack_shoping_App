import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryData } from "../store/dispatchers";
import * as dispatcher from "../store/dispatchers"
import { connect } from 'react-redux'
import "./AddCategories.scss"


const AddCategory = ({
    getCategoryDetails,
    getCategoryData,
    categoryDetailsSuccess
}) => {
    const navigate = useNavigate();
    const { page } = useParams();
    const [pageNum, setPageNum] = useState(page ? Number(page) : 1);
    const [categoryDetails, setCategoryDetails] = useState(null);

   // To get the all the category list api
   useEffect(() =>{
    getCategoryData(pageNum);
   },[getCategoryData])
   

  console.log(getCategoryDetails);

    const handleCategory = () => {
        navigate("/home/categories/list")
    }

    //Succesfully able to get categoryDetails using Universal-cookies with authuntication
    //but failed to send token to backend using document.cookie need to learn this
    return (
        <div className='AddCategory'>
            <div>
                <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium AddCategory--AddCategoryBtn'
                    onClick={() => handleCategory()}
                >
                    <span>Add Category</span>
                    <i className="bi bi-plus"></i>
                </button>
            </div>
            <hr />
            <div>
                leoraepsumleoraepsumleoraepsumleoraepsumleoraepsumleoraepsum
            </div>
        </div>
    )
}

const mapStateToProps = ({ category }) =>{
    console.log(category)
    return {
        getCategoryDetails: category.categoryDetails,
        // categoryDetailsSuccess: category.categoryDetailsSuccess
    }
}
export default connect(mapStateToProps,dispatcher)(AddCategory)