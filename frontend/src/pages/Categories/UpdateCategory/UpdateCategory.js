import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCategoryById } from '../store/dispatchers'
import Category from '../Category'


const UpdateCategory = ({
  updateCategory
}) => {
  const value = useLocation();
  const [categoryValue, setCategoryValue] = useState({name:value?.state?.data.name});
  // console.log(value)
  //need to call CreateApi(Post Api)//Update Api in respective Component is pending know

  //onChangeEvent
  const handleCategoryChange = (value) =>{
      setCategoryValue(value)
  }

  //onSubmit event 
  const handleSubmit = () =>{
    updateCategory(categoryValue,value?.state?.data?._id)
  }

  return (
    <div className='CreateCategory'>
        <Category 
        title="Update Category" 
        btnLabel="Update Category" 
        categoryName={categoryValue.name}
        handleSubmit={handleSubmit}
        handleChange={handleCategoryChange}
        />
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
     updateCategory: (data,id) => dispatch(updateCategoryById(data,id))
  }
}

export default connect(null,mapDispatchToProps)(UpdateCategory)