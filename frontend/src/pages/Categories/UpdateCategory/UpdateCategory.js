import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCategoryById, resetState } from '../store/dispatchers'
import Category from '../Category'


const UpdateCategory = ({
  updateCategory,
  updateCategoryDetailsSuccess,
  resetState
}) => {
  const navigate = useNavigate();
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

  
  useEffect(() =>{
    if(updateCategoryDetailsSuccess) {
      navigate('/home/categories')
    }
    resetState()
  },[navigate, resetState, updateCategoryDetailsSuccess])

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
     updateCategory: (data,id) => dispatch(updateCategoryById(data,id)),
     resetState: () => dispatch(resetState())
  }
}

const mapStateToProps = ({ category }) =>{
  return {
    updateCategoryDetailsSuccess: category.updateCategoryDetailsSuccess,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateCategory)