import React, { useState } from 'react';
import ReusableButton from '../../../reuse/Button';
import { postApiCalling } from '../../../service/AuthService';
import { useNavigate } from 'react-router-dom'
import "./CreateCategory.scss";

const CreateCategory = (props) => {
  const navigate = useNavigate();
  const [createCategory, setCreateCategory] = useState({
    name:'',
  });

  const handleCategory = () => {
    if (props.setDisplayCategory !== undefined) {
      props.setDisplayCategory("addCategory")
    }
  }

  const handleCreateCategory = (e) =>{
     setCreateCategory({
      ...createCategory,
      name:e.target.value,
     })
  }

  const handleSubmitCategory = (e) =>{
      e.preventDefault();
      const AddCreateCategory = postApiCalling("/api/createCategory",createCategory);
      AddCreateCategory.then((response) =>{
        if(response) {
          props.setDisplayCategory("addCategory")
        }
      })
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
          <form onSubmit={(e) =>handleSubmitCategory(e)}>
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
          </form>
        </div>
      </div>
  )
}

export default CreateCategory