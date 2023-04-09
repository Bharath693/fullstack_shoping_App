import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Category from '../../Categories/Category';
import { postProductDataApi } from '../store/dispatchers'
import { connect } from 'react-redux'

const ProductList = ({
  createProduct
}) => {
    const navigate = useNavigate();
    const [Value, setValue] = useState({name:""});

    const handleCategoryChange = (value) =>{
        setValue(value)
    }

    const handleRedirectComponent = () =>{
         navigate('/home/products')
    }

    const handleProductSubmit = () =>{
       createProduct(Value)
    }

  return (
    <div className='CreateCategory'>
        <Category 
        headerTitle="Product List"
        title="Product List" 
        btnLabel="Product List"
        placeholder="Create Product..."
        categoryName={Value.name}
        handleSubmit={handleProductSubmit}
        handleChange={handleCategoryChange}
        handleRedirectComponent={handleRedirectComponent}
        />
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
     createProduct:(data) => dispatch(postProductDataApi(data))
  }
}

export default connect(null,mapDispatchToProps)(ProductList)