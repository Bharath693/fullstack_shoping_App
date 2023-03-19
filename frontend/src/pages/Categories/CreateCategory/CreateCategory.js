import { postCategoryDataApi, resetState } from '../store/dispatchers'
import { connect } from 'react-redux';
import Category from '../Category';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CreateCategory.scss";

const CreateCategory = ({
  createCategory,
  postCategoryDetailsSuccess,
  resetState
}) => {

  const navigate = useNavigate();
  const [categoryValue, setCategoryValue] = useState({name:""})
  //we are calling create and update api call's in respective components.

  //onChangeEvent
  const handleCategoryChange = (value) =>{
    setCategoryValue(value)
}

  // //onSubmit event
  const handleSubmit = () =>{
    createCategory(categoryValue)
  }

  useEffect(() =>{
    if(postCategoryDetailsSuccess) {
      navigate('/home/categories')
    }
    resetState();
  },[navigate, postCategoryDetailsSuccess, resetState])

  
  return (
    <div className='CreateCategory'>
      <Category 
      title="Create Category" 
      btnLabel="Create Category"
      categoryName={categoryValue.name}
      handleSubmit={handleSubmit}
      handleChange={handleCategoryChange}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
   return{
      createCategory:(data) => dispatch(postCategoryDataApi(data)),
      resetState:() =>dispatch(resetState())
   }
}

const mapStateToProps = ({ category }) =>{
   return{
    postCategoryDetailsInProgress: category.postCategoryDetailsInProgress,
    postCategoryDetailsSuccess:category.postCategoryDetailsSuccess
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCategory)