import React, { useState } from 'react';
import ReusableButton from '../../../reuse/Button';
import { postApiCalling } from '../../../service/AuthService';
import * as dispatcher from '../store/dispatchers'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import "./CreateCategory.scss";

const CreateCategory = ({
  postCategoryDataApi
}) => {
  const navigate = useNavigate();
  const [createCategory, setCreateCategory] = useState({
    name: '',
  });

  const handleCategory = () => {
    // if (props.setDisplayCategory !== undefined) {
    //   props.setDisplayCategory("addCategory")
    // }
    navigate("/home/categories")
  }

  const handleCreateCategory = (e) => {
    setCreateCategory({
      ...createCategory,
      name: e.target.value,
    })
  }

  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    // The redux-saga implementation is done for this api need to proceed further
    postCategoryDataApi(createCategory)
  }

  return (
    <div className='CreateCategory'>
      <div className='CreateCategory-categoryBtnDiv'>
        <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium CreateCategory--CategoryListBtn'
          onClick={() => handleCategory()}>
          <i className="bi bi-arrow-left-short leftArrow"></i>
          <span>Category List</span>
        </button>
      </div>
      <hr />
      <div>
        <form onSubmit={(e) => handleSubmitCategory(e)}>
          <div className='CreateCategory--Main'>
            <h3 className='text-white'>Create Category</h3>
            <input
              type="text"
              placeholder='Category Name...'
              className='CreateCategory--inputField'
              value={createCategory.name}
              onChange={handleCreateCategory}
            />
            <div className='mt-3 CreateCategory--addCategoryBtn'>
              <ReusableButton
                label="Create Category"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(null,dispatcher)(CreateCategory)