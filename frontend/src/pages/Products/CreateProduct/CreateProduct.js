import React from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const navigate = useNavigate();

    const handleCategory = () => {
        navigate("/home/products/list")
    }

  return (
    <div className='AddCategory'>
            <div>
                <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium AddCategory--AddCategoryBtn'
                    onClick={() => handleCategory()}
                >
                    <span>Create Product</span>
                    <i className="bi bi-plus"></i>
                </button>
            </div>
            <hr />
            {/* {categoryDetailsInProgress ? 
            <Spinner spinner={spinner}/> 
            : 
            <AddCategoryTableList categoryDetails={categoryDetails} pageNum={pageNum} setPageNum={setPageNum}/>
            } */}
        </div>
  );
};

export default CreateProduct;