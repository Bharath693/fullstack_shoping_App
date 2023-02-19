import React,{ useState } from 'react';
import ReusableButton from '../../reuse/Button';
import { postApiCalling } from '../../service/AuthService';
import * as dispatcher from './store/dispatchers'
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Category.scss";

const Category = ({
  btnLabel,
  title,
  postCategoryDataApi
}) => {
    const value = useLocation();
    // console.log(value)
    const navigate = useNavigate();
    const [createCategory, setCreateCategory] = useState({
      name: value.state === null ? '' : value.state.data,
    });  

    const handleCategory = () => {
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
    <div className='Category'>
    <div className='Category-categoryBtnDiv'>
      <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium Category--CategoryListBtn'
        onClick={() => handleCategory()}>
        <i className="bi bi-arrow-left-short leftArrow"></i>
        <span>Category List</span>
      </button>
    </div>
    <hr />
    <div>
      <form onSubmit={(e) => handleSubmitCategory(e)}>
        <div className='Category--Main'>
          <h3 className='text-white'>{title}</h3>
          <input
            type="text"
            placeholder='Category Name...'
            className='Category--inputField'
            value={createCategory.name}
            onChange={handleCreateCategory}
          />
          <div className='mt-3 Category--addCategoryBtn'>
            <ReusableButton
              label={btnLabel}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default connect(null,dispatcher)(Category)