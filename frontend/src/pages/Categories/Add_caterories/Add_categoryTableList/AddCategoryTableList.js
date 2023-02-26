import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../../reuse/Pagination';

const AddCategoryTableList = (props) => {
  const navigate = useNavigate();

  const handleEdit = (value) =>{
     navigate(`/home/updateCategoey/${value._id}`,{state:{data:value}})
  }

  return (
    <div>
      <table className="w-full bg-gray-900 rounded-md">
        <thead>
          <tr className='border-b border-gray-800 text-left'>
            <th className="p-3 capitalize font-medium text-gray-500">Name</th>
            <th className="p-3 capitalize font-medium text-gray-500">Edit</th>
            <th className='p-3 capitalize font-medium text-gray-500'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.categoryDetails?.catrgories.map((item) => {
            // console.log(item)
            return (
              <tr key={item._id}>
                <td className="text-white p-3 capitalize">{item.name}</td>
                <td className='text-white p-3'><button className='edit-category' onClick={() =>handleEdit(item)}>Edit</button></td>
                <td className='text-white p-3'><button>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div><Pagination pagination={props.categoryDetails} pageNum={props.pageNum} setPageNum={props.setPageNum}/></div>
    </div>
  )
}

export default AddCategoryTableList