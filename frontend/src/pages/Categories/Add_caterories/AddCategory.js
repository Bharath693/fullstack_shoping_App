import React from 'react';
import "./AddCategories.scss"

const AddCategory = (props) => {

    const handleCategory = () => {
        if (props.setDisplayCategory !== undefined) {
            props.setDisplayCategory("categoryList")
        }
    }

    return (
        <div className='AddCategory'>
            <div>
                <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium AddCategory--AddCategoryBtn'
                    onClick={() =>handleCategory()}>
                    <span>Add Category</span>
                    <i class="bi bi-plus"></i>
                </button>
            </div>
            <hr />
            <div>
                l
            </div>
        </div>
    )
}

export default AddCategory