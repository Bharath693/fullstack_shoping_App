import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header';
import Breadcrumb from '../../../reuse/Breadcrumb';
import { useParams } from 'react-router-dom';

//dispatchers
import { getProductDetailsById } from "../store/dispatchers";
import { connect } from 'react-redux';


const ProductDetails = ({productDetailsById}) => {
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
        id:1,
        Name:"Home",
        path:"/"
    },
    {
        id:1,
        Name:"Home",
        path:"/"
    }
 ]
  return (
    <div>
        <Header />
        <div>
            <Breadcrumb />
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

export default connect(null, mapDispatchToProps)(ProductDetails)