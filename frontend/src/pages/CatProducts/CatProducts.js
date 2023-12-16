import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { ProductCategoryDispatcher } from "./store/dispatcher";
import Animate from "../../components/HomePageProducts/Animate/Animate";
import currency from "currency-formatter"

import { Link, useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./CatProducts.scss";

const CatProducts = ({
  catProductDispatcher,
  catProductDatainProgress,
  catProductDetails,
}) => {
  
  const { name, page = 1 } = useParams();
 
  //using this useEffect to get the categoryProducts
  useEffect(() => {
    catProductDispatcher(name, page);
  }, [catProductDispatcher, name, page]);

  //using this function to get the product details of the selected product
  const handleProductClick = (details) =>{
     
  }

  return (
    <div className="catProduct">
      <Header />
      <div className="catProductContainer flex justify-center align-middle">
        <h5>#{name && name}</h5>
      </div>
      <div className="my-container my-10 flex w-full">
        {catProductDatainProgress ? (
          [1, 2, 3, 4].map((num) => {
            return (
              <div className="w-6/12 sm:w-4/12 md:w-3/12 lg:w[20%] xl:w-2/12 p-4 rounded-md mr-4 bg-indigo-50 relative">
                <Animate />
              </div>
            );
          })
        ) : catProductDetails?.data?.HomeProducts[0] !== null && catProductDetails?.data?.HomeProducts?.length > 0 ? (
          <div className="w-[95%] m-auto">
          <p className="text-base font-medium text-gray-700 ml-2">
            {catProductDetails?.data?.HomeProducts?.length} products found in #{name} category
          </p>
          <div className="flex flex-wrap w-full m-auto">
            {catProductDetails?.data?.HomeProducts.map((item) => {
              const percentage = item !== null && item.discount/100;
              const discountPrice = item !== null && item.price - item.price * percentage;
             console.log(item)
              return (
                // <Link to={`/product/${item._id}`} className="catProductLink">
                <Link 
                 to={`/product/${item._id}`}
                 state={name}
                className="catProductLink"
                >
                  <div className="catProductimgMain">
                    <img
                      src={`http://localhost:5000/api/${item.image}`}
                      alt=""
                    />
                  </div>
                  <p className="catProductTitle">{item.title}</p>
                  <div className="flex justify-between mr-3 ml-2">
                     <span className="text-lg font-medium text-black">₹{discountPrice}</span>
                     <span className="text-lg font-medium text-gray-600 line-through">₹{item.price}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          </div>
        ) : (
          <div className="alert-danger w-[80%] py-2 text-red-600 pl-3 m-auto">
            No Products found in #{name && name} category
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    catProductDispatcher: (category, page) =>
      dispatch(ProductCategoryDispatcher(category, page)),
  };
};

const maStateToProps = ({ catProducts }) => {
  return {
    catProductDatainProgress: catProducts.catProductDatainProgress,
    catProductDetails: catProducts.catProductData,
  };
};

export default connect(maStateToProps, mapDispatchToProps)(CatProducts);