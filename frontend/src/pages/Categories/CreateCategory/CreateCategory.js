import React from 'react';
import ReusableButton from '../../../reuse/Button';
import "./CreateCategory.scss";

const CreateCategory = (props) => {

  const handleCategory = () => {
    if (props.setDisplayCategory !== undefined) {
      props.setDisplayCategory("addCategory")
    }
  }

  return (
      <div className='CreateCategory'>
        <div>
          <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium CreateCategory--CategoryListBtn'
            onClick={() => handleCategory()}>
             <i className="bi bi-arrow-left-short leftArrow"></i>
            <span>Category List</span>
          </button>
        </div>
        <hr />
        <div>
          <form>
            <h3 className='text-white'>Create Category</h3>
            <input type="text"  placeholder='Category Name...' className='CreateCategory--inputField'/>
            <div className='mt-3 CreateCategory--addCategoryBtn'>
            <ReusableButton 
            label="Create Category"
            />
            </div>
          </form>
        </div>
      </div>
  )
}

export default CreateCategory