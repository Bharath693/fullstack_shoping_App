import { postCategoryDataApi } from '../store/dispatchers'
import { connect } from 'react-redux';
import Category from '../Category';
import "./CreateCategory.scss";
import { useState } from 'react';

const CreateCategory = ({
  createCategory
}) => {
  const [categoryValue, setCategoryValue] = useState({name:""})
  //need to call CreateApi(Post Api)//Update Api in respective Component is pending know

  //onChangeEvent
  const handleCategoryChange = (value) =>{
    setCategoryValue(value)
}

  // //onSubmit event
  const handleSubmit = () =>{
    createCategory(categoryValue)
  }

 console.log(categoryValue)
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
      createCategory:(data) => dispatch(postCategoryDataApi(data))
   }
}

export default connect(null,mapDispatchToProps)(CreateCategory)