import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../../reuse/inputfield";
import { getCategoryDataApi } from "../../Categories/store/dispatchers";
import { postProductDataApi } from "../store/dispatchers";
import * as dispatcher from "../store/dispatchers";
import { connect } from "react-redux";
import Dropdown from "../../../reuse/Dropdown";
import Spinner from "../../../reuse/Spinner";
import { TwitterPicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import Colors from "./colors";
import "./ProductList.scss";
import ProductSizes from "./ProductSizes";

const ProductList = ({
  getCategoryDetails,
  getCategoryDataApiCall,
  categoryDetailsSuccess,
  categoryDetailsInProgress,
}) => {
  const navigate = useNavigate();
  const [categoryValue, setCategoryValue] = useState("");
  const [products, setProducts] = useState({
    title: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    color:[]
  });

  const sizes = ['xsm','sm','md','lg','1 year', '2 years', '3 years', '4 years', '5 years'];

  const [sizeList, setSizeList] = useState([]);

  //declearing the spinner state value
  const [spinner, setSpinner] = useState(false);

  const handleTextFieldValue = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const handleRedirectComponent = () => {
    navigate("/home/products");
  };

  const handleProductSubmit = () => {};

  useEffect(() => {
    getCategoryDataApiCall(1);
  }, [getCategoryDataApiCall]);

  useEffect(() => {
    if (categoryDetailsInProgress) {
      setSpinner(true);
    }
    if (categoryDetailsSuccess) {
      setSpinner(false);
    }
  }, [categoryDetailsInProgress, categoryDetailsSuccess]);

  //to get the data from dropdown we are using this function
  const handleValueChange = (e) => {
    setProducts({
      ...products,
      category:e.target.value
    })
  };

  const saveColor = (color) =>{
       const filtered = products.color.filter((clr) => clr.color !== color.hex);
       setProducts({...products, color:[...filtered, {color : color.hex, id:uuidv4()}]})
  }

  const deleteColor = (color) =>{
    const filtered = products.color.filter((clr) => clr.color !== color);
    setProducts({...products, color: filtered})
  }

  const chooseSize = (ProductSize) =>{
      let filtered = sizeList.filter((size) => size !== ProductSize);
      setSizeList([...filtered, ProductSize])
  }

  const deleteSize = (productSize) =>{
    let filtered = sizeList.filter((size) => size !== productSize);
      setSizeList(filtered)
  }
 
  console.log(sizeList)
  return (
    <div className="ProductList">
      <div className="form-group">
        <div>
          <button
            className="bg-gray-900 text-white px-2 py-2 capitalize font-medium Product--ProductListBtn"
            onClick={handleRedirectComponent}
          >
            <i className="bi bi-arrow-left-short leftArrow"></i>
            <span>Product List</span>
          </button>
          <hr />
        </div>
        <form>
          <div className="row ProductListForm">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <label>Title</label>
                  <div className="">
                    <TextField
                      placeholder="Title"
                      name="title"
                      type="text"
                      value={products.title}
                      handleTextFieldValue={handleTextFieldValue}
                      className="inputField--Input"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <label>Price</label>
                  <div className="">
                    <TextField
                      placeholder="Price"
                      name="price"
                      type="text"
                      value={products.price}
                      handleTextFieldValue={handleTextFieldValue}
                      className="inputField--Input"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <label>Discount</label>
                  <div className="">
                    <TextField
                      placeholder="Discount"
                      name="discount"
                      type="text"
                      value={products.discount}
                      handleTextFieldValue={handleTextFieldValue}
                      className="inputField--Input"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <label>Stock</label>
                  <div className="">
                    <TextField
                      placeholder="Stock"
                      name="stock"
                      type="text"
                      value={products.stock}
                      handleTextFieldValue={handleTextFieldValue}
                      className="inputField--Input"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  {categoryDetailsInProgress ? (
                    <Spinner spinner={spinner} />
                  ) : (
                    <Dropdown
                      getDropdownDetails={
                        getCategoryDetails && getCategoryDetails.catrgories
                      }
                      initialOptionLabel="choose category"
                      label="Categories"
                      value={products.category}
                      handleValueChange={handleValueChange}
                    />
                  )}
                </div>
                <div className="col-lg-6 mt-5">
                  <label>Choose Color</label>
                  <div className="mt-2">
                    <TwitterPicker 
                     onChangeComplete={saveColor}
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <h3>Choose Size</h3>
                    <div className="ProductSizes">
                      {sizes && sizes.map((size) =>{
                        return (
                          <>
                          <div className="AllignIndividualProductSizes" onClick={() => chooseSize(size)}>{size}</div>
                          </>
                        )
                      })}
                    </div>
                </div>
              </div>
              {/* <div className="mt-5">
                {categoryDetailsInProgress ? (
                  <Spinner spinner={spinner}/>
                ) : (
                  <Dropdown
                    getDropdownDetails={
                      getCategoryDetails && getCategoryDetails.catrgories
                    }
                    initialOptionLabel="choose category"
                    label="Categories"
                    value={categoryValue}
                    handleValueChange={handleValueChange}
                  />
                )}
              </div> */}
            </div>
            <div className="col-lg-4">
                <Colors colorsList= {products.color} deleteColor={deleteColor} />
                <ProductSizes productList={sizeList} deleteSize={deleteSize}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (data) => dispatch(postProductDataApi(data)),
    getCategoryDataApiCall: (pageNum) => dispatch(getCategoryDataApi(pageNum)),
  };
};

const mapStateToProps = ({ category }) => {
  return {
    getCategoryDetails: category.categoryDetails,
    categoryDetailsSuccess: category.categoryDetailsSuccess,
    categoryDetailsInProgress: category.categoryDetailsInProgress,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);