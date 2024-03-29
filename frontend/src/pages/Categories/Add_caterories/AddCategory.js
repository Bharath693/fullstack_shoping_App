import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as dispatcher from "../store/dispatchers"
import { connect } from 'react-redux';
import Spinner from '../../../reuse/Spinner';
import AddCategoryTableList from './Add_categoryTableList/AddCategoryTableList';
import "./AddCategories.scss"


const AddCategory = ({
    getCategoryDetails,
    getCategoryDataApi,
    categoryDetailsSuccess,
    categoryDetailsInProgress
}) => {
    const navigate = useNavigate();
    const { page } = useParams();
    const [pageNum, setPageNum] = useState(page ? Number(page) : 1);
    const [categoryDetails, setCategoryDetails] = useState(null);

    // To set the spinner value
    const [spinner, setSpinner] = useState(false);

   // To get all the category list api,
   // we have done route changing in pagination Component,but need to clean up the code 
   useEffect(() =>{
    if(pageNum) {
        getCategoryDataApi(pageNum);
    }
   },[getCategoryDataApi, pageNum])
   
    //Setting up the spinner value
    useEffect(() =>{
     if(categoryDetailsInProgress){
        setSpinner(true)
     }
     if(categoryDetailsSuccess){
        setSpinner(false);
        setCategoryDetails(getCategoryDetails)
     }
    },[categoryDetailsInProgress, categoryDetailsSuccess, getCategoryDetails])

    const handleCategory = () => {
        navigate("/home/categories/list")
    }

    //Succesfully able to get categoryDetails using Universal-cookies with authuntication
    //but failed to send token to backend using document.cookie need to learn this
    //need to create Update-category api for that need to use same file(createCategory) as common need to make some changes 
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
            {categoryDetailsInProgress ? 
            <Spinner spinner={spinner}/> 
            : 
            <AddCategoryTableList categoryDetails={categoryDetails} pageNum={pageNum} setPageNum={setPageNum}/>
            }
        </div>
    )
}

const mapStateToProps = ({ category }) =>{
    return {
        getCategoryDetails: category.categoryDetails,
        categoryDetailsSuccess: category.categoryDetailsSuccess,
        categoryDetailsInProgress: category.categoryDetailsInProgress
    }
}
export default connect(mapStateToProps,dispatcher)(AddCategory)