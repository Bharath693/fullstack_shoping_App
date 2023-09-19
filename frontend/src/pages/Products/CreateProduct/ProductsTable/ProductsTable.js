import React from 'react';
import "./ProductsTable.scss";
import { useNavigate } from 'react-router-dom';
import { deleteProductById } from "../../store/dispatchers";
import { connect } from 'react-redux'

//let with delete Product by Id 
const ShowProducts = ({
  productDetails,
  deleteProductById
}) => {
  const navigate = useNavigate();
  
  const handleEditProduct = (item) =>{
    navigate(`/home/edit-product/${item._id}`)
  }

  const handleDeleteProduct = (item) =>{
     deleteProductById(item._id)
  }

  return (
    <div className='productTable'>
        <table className="w-full bg-gray-900 rounded-md">
           <thead>
           <tr className='border-b border-gray-800 text-left'>
            <th className="p-3 capitalize font-medium text-gray-500">Name</th>
            <th className="p-3 capitalize font-medium text-gray-500">Price</th>
            <th className='p-3 capitalize font-medium text-gray-500'>Stock</th>
            <th className='p-3 capitalize font-medium text-gray-500'>Image</th>
            <th className="p-3 capitalize font-medium text-gray-500" >Edit</th>
            <th className='p-3 capitalize font-medium text-gray-500'>Delete</th>
          </tr>
           </thead>
           <tbody>
              {productDetails?.data?.products.length > 0 && productDetails.data.products.map((item) =>{
                return(
              <tr key={item._id}>
                <td className="text-white p-3 capitalize">{item.category}</td>
                <td className="text-white p-3 capitalize">{item.price}</td>
                <td className="text-white p-3 capitalize">{item.stock}</td>
                <td className="text-white p-3 capitalize"><img src={`http://localhost:5000/api/${item.image}`} alt='loading...' className='productTable'/></td>
                <td className='text-white p-3'><button className='edit-category' onClick={() =>handleEditProduct(item)}>Edit</button></td>
                <td className='text-white p-3'><button className='deleteCategory' onClick={() =>handleDeleteProduct(item)}>Delete</button></td>
              </tr>
                )
              })}
           </tbody>
        </table>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteProductById:(id) => dispatch(deleteProductById(id))
  }
}

export default connect(null, mapDispatchToProps)(ShowProducts)