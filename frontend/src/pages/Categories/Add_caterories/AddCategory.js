import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getApiCalling } from "../../../service/AuthService"
import "./AddCategories.scss"

const AddCategory = (props) => {
    const navigate = useNavigate();
    const { page } = useParams();
    const [pageNum, setPageNum] = useState(page ? Number(page) : 1)

    const handleCategory = () => {
        navigate("/home/categories/list")
    }

   getApiCalling(`/api/categories/${pageNum}`)
   .then((data) =>{
    console.log(data)
   })
   
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

export default AddCategory