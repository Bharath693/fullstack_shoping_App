import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Breadcrumb from "../../../reuse/Breadcrumb";
import { useLocation, useParams } from "react-router-dom";
import h2p from "html2plaintext";

//react-icons
import { FaAngleRight } from "react-icons/fa";

//dispatchers
import { getProductDetailsById } from "../store/dispatchers";
import { connect } from "react-redux";
import ProductDetailsSkeleton from "../ProductDetailsSkeleton/ProductDetailsSkeleton";
import ProductQuantity from "../ProductQuantity/ProductQuantity";

//css
import "./ProductDetails.scss";

const ProductDetails = ({
  productDetailsById,
  getProductName,
  getProductsLoading,
}) => {
  const location = useLocation();
  const category = location?.state;

  let { id } = useParams();
  
  const [quantity, setQuantity] = useState(1)

  const percentage =
    getProductName?.data !== null &&
    Number(getProductName?.data.ProductDetails?.discount) / 100;
  let price = Number(getProductName?.data.ProductDetails?.price);
  let discountPrice = price - price * percentage;

  //in order to display the sizes declearing this variable;

  //using this useEffect to call the getProductDetails Api call
  useEffect(() => {
    if (id) {
      productDetailsById(id);
    }
  }, [id, productDetailsById]);

  let breadCrumbData = [
    {
      id: 1,
      Name: "Home",
      icon: <FaAngleRight />,
      path: "/",
    },
    {
      id: 2,
      Name: `${category || getProductName?.data.ProductDetails?.category}`,
      icon: <FaAngleRight />,
      path: `/cat-products/${
        category || getProductName?.data.ProductDetails?.category
      }`,
    },
    {
      id: 3,
      Name: `${getProductName?.data?.ProductDetails?.title}`,
      icon: "",
      path: `/product/${id}`,
    },
  ];

  const inc = () =>{
    setQuantity(quantity + 1)
  }

  const dec = () =>{
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  console.log(getProductName,"loading");

  return (
    <div>
      <Header />
      {getProductName === null  ? (
        <ProductDetailsSkeleton />
      ) : (
        <>
          <div>
            <Breadcrumb breadCrumbData={breadCrumbData} />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-6/12 p-5">
              <div className="flex flex-wrap -mx-1">
                <div className="w-full p-1">
                  <img
                    src={`http://localhost:5000/api/${getProductName?.data?.ProductDetails?.image}`}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-6/12 p-5">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {getProductName?.data?.ProductDetails?.title}
              </h1>
              <div className="flex justify-between my-5">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{discountPrice && discountPrice}
                </span>
                <span className="text-xl line-through text-gray-500">
                  ₹{getProductName?.data?.ProductDetails?.price}
                </span>
              </div>
              {getProductName?.data?.ProductDetails &&
                getProductName?.data?.ProductDetails.size.length > 0 && (
                  <>
                    <h3 className="text-lg font-medium capitalize text-gray-600">
                      sizes
                    </h3>
                    <div className="flex flex-wrap">
                      {JSON.parse(
                        getProductName?.data?.ProductDetails.size
                      ).map((item) => (
                        <div className="p-1 m-1 border border-gray-400 rounded cursor-pointer -ml-1">
                          <span className="text-sm font-semibold uppercase text-gray-400">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              {getProductName?.data?.ProductDetails.color.length > 0 && (
                <>
                  <h3 className="text-lg font-medium capitalize text-gray-600">
                    Colors
                  </h3>
                  <div className="flex flex-wrap">
                    {getProductName?.data?.ProductDetails.color.map((item) => (
                      <div className="p-1 m-1 border border-gray-400 rounded cursor-pointer -ml-1">
                        <span
                          className="min-w-[40px] min-h-[40px] rounded block"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div className="flex items-center">
                 <div className="w-full sm:w-6/12 p-3">
                     <ProductQuantity quantity={quantity} inc={inc} dec={dec}/>
                 </div>
                 <div className="w-full sm:w-6/12 p-3">
                    <button className="btn custom-bg-indigo text-white">
                        Add To Cart
                    </button>
                 </div>
              </div>
              <h3 className="text-lg font-medium capitalize text-gray-600">
                description
              </h3>
              <p>
                {getProductName?.data &&
                  h2p(getProductName?.data?.ProductDetails?.description)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    productDetailsById: (id) => dispatch(getProductDetailsById(id)),
  };
};

const mapStateToProps = ({ product }) => {
  return {
    getProductName: product.getProductDataById,
    getProductsLoading: product.getProductDetailsByIdInProgress,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);