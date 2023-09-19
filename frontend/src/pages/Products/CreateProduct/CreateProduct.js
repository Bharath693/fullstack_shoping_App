import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProductsApi } from '../store/dispatchers'
import { connect } from "react-redux";
import Spinner from "../../../reuse/Spinner";
import ProductsTable from "./ProductsTable/ProductsTable"

const CreateProduct = (
    { 
        getAllProductsApiCall, 
        getAllProducts,
        getAllProductsInProgress,
        getAllProductsSuccess 
    }
    ) => {
    const { page } = useParams();
   
    const [pageNum, setPageNum] = useState(page ? Number(page) : 1)

    //to set All the Products comming from an api call
    const [AllProducts, setAllProducts] = useState([]);
    //to set the spinner
    const [spinner, setSpinner] = useState(false);

    const navigate = useNavigate();

    const handleCategory = () => {
        navigate("/home/products/list")
    }

    //using this useEffect for Api call inorder to get All the product details
    useEffect(() =>{
        getAllProductsApiCall(page)
    },[getAllProductsApiCall, page])

    //using this useEffect to set the value of spinner && All products
    useEffect(() =>{
        if(getAllProductsInProgress) {
            setSpinner(true)
        }
        if(getAllProductsSuccess) {
            setSpinner(false)
            setAllProducts(getAllProducts)
        }
    },[getAllProducts, getAllProductsInProgress, getAllProductsSuccess])

  return (
    <div className='AddCategory'>
            <div>
                <button className='bg-gray-900 text-white px-2 py-2 capitalize font-medium AddCategory--AddCategoryBtn'
                    onClick={() => handleCategory()}
                >
                    <span>Create Product</span>
                    <i className="bi bi-plus"></i>
                </button>
            </div>
            <hr />
            {getAllProductsInProgress ? 
            <Spinner spinner={spinner}/>
            : 
            <ProductsTable productDetails={AllProducts} pageNum={pageNum}/>
            }
        </div>
  );
}; 

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllProductsApiCall:(page) => dispatch(getAllProductsApi(page))
    }
}

const mapStateToProps = ({ product }) =>{
    return {
        getAllProducts: product.getAllProductsDetails,
        getAllProductsInProgress: product.getAllProductDetailsInProgress,
        getAllProductsSuccess: product.getAllProductsDetailsSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);