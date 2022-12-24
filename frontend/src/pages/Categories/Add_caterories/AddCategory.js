import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryData } from "../store/dispatchers";
import { connect } from 'react-redux'
import "./AddCategories.scss"


const AddCategory = ({
    getCategoryDetails
}) => {
    const navigate = useNavigate();
    const { page } = useParams();
    const [pageNum, setPageNum] = useState(page ? Number(page) : 1);
    const [categoryDetails, setCategoryDetails] = useState(null);

    getCategoryData(pageNum)

    const handleCategory = () => {
        navigate("/home/categories/list")
    }

   
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

const mapDispatchToProps = (dispatch) =>{
    return {
        getCategoryDetails:(pageNum) =>dispatch(getCategoryData(pageNum))
    }
    
}

export default connect(null,mapDispatchToProps)(AddCategory)