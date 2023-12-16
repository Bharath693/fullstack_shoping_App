import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header';
import Breadcrumb from '../../../reuse/Breadcrumb';
import { useLocation, useParams } from 'react-router-dom';

//dispatchers
import { getProductDetailsById } from "../store/dispatchers";
import { connect } from 'react-redux';


const ProductDetails = ({ productDetailsById, getProductName }) => {
    const location = useLocation();
    const category = location?.state;
    console.log(category,"category")
    let { id } = useParams();

    //using this useEffect to call the getProductDetails Api call
    useEffect(() =>{
       if(id) {
        productDetailsById(id)
       }
    },[id, productDetailsById])

 let breadCrumbData = [
    {
        id:1,
        Name:"Home",
        path:"/"
    },
    {
        id:2,
        Name:`${category || getProductName?.data.ProductDetails?.category}`,
        path:`/cat-products/${category || getProductName?.data.ProductDetails?.category}`
    },
    {
        id:3,
        Name:`${getProductName?.data?.ProductDetails?.title}`,
        path:`/product/${id}`
    },
 ];
 console.log(getProductName,"ProductName")
  return (
    <div>
        <Header />
        <div>
            <Breadcrumb breadCrumbData={breadCrumbData}/>
        </div>
        <div>Product Details</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
     productDetailsById: (id) => dispatch(getProductDetailsById(id))
  }
}

const mapStateToProps = ({ product }) =>{
    return {
        getProductName: product.getProductDataById
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)