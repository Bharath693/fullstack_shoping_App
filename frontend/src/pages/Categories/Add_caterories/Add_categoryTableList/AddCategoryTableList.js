import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCategoryById } from '../../store/dispatchers'

import Pagination from '../../../../reuse/Pagination';
import "./AddCategoryTableList.scss";

const AddCategoryTableList = ({
  categoryDetails,
  pageNum,
  setPageNum,
  deleteCategory,
  deleteCategoryDetailsSuccess,
  deleteCategoryDetails
}) => {
  const navigate = useNavigate();

  const handleEdit = (value) =>{
     navigate(`/home/updateCategoey/${value._id}`,{state:{data:value}})
  }

  const handleDelete = (value) =>{
    // console.log(value)
    deleteCategory(value)
  }

  useEffect(() =>{
    if(deleteCategoryDetailsSuccess) {
       window.location.reload();
    }
  },[deleteCategoryDetailsSuccess])

console.log(categoryDetails)

  return (
    <div className='categoryTable'>
      <table className="w-full bg-gray-900 rounded-md">
        <thead>
          <tr className='border-b border-gray-800 text-left'>
            <th className="p-3 capitalize font-medium text-gray-500">Name</th>
            <th className="p-3 capitalize font-medium text-gray-500">Edit</th>
            <th className='p-3 capitalize font-medium text-gray-500'>Delete</th>
          </tr>
        </thead>
        <tbody>
        {categoryDetails?.catrgories.map((item) => {
            // console.log(item)
            return (
              <tr key={item._id}>
                <td className="text-white p-3 capitalize">{item.name}</td>
                <td className='text-white p-3'><button className='edit-category' onClick={() =>handleEdit(item)}>Edit</button></td>
                <td className='text-white p-3'><button className='deleteCategory' onClick={() =>handleDelete(item)}>Delete</button></td>

              </tr>
            )
          })}
        </tbody>
      </table>
      <div><Pagination pagination={categoryDetails} pageNum={pageNum} setPageNum={setPageNum}/></div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
   return {
    deleteCategory:(id) => dispatch(deleteCategoryById(id))
   }
}

const mapStateToProps = ({ category }) =>{
   return {
    deleteCategoryDetailsSuccess: category.deleteCategoryDetailsSuccess,
    deleteCategoryDetails: category.deleteCategoryDetails
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryTableList)