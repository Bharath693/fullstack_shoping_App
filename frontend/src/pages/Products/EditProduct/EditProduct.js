import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductById, updateProductById } from "../store/dispatchers";
import { getCategoryDataApi } from "../../Categories/store/dispatchers";
import { connect } from "react-redux";
import Colors from "../ProductList/colors";
import { v4 as uuidv4 } from "uuid";
import ProductSizes from "../ProductList/ProductSizes";
import TextEditor from "../../../reuse/TextEditor";
import { TwitterPicker } from "react-color";
import Dropdown from "../../../reuse/Dropdown";
import Spinner from "../../../reuse/Spinner";
import TextField from "../../../reuse/inputfield";

//need to check with the data sending with the backend
const EditProduct = ({
  getProductDetailsByIdApiCall,
  getCategoryDetails,
  getCategoryDataApiCall,
  categoryDetailsSuccess,
  categoryDetailsInProgress,
  productDetailsById,
  updateProductById,
}) => {
  
  const navigate = useNavigate();

  //get id from use Params
  const { id } = useParams();

  //using this useEffect to call An Api to get the product details based on the Id
  useEffect(() => {
    if (id) {
      getProductDetailsByIdApiCall(id);
    }
  }, [getProductDetailsByIdApiCall, id]);

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    color: [],
    size: [],
    image:"",
    description: "",
  });

  const sizes = [
    "xsm",
    "sm",
    "md",
    "lg",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
  ];

  const [sizeList, setSizeList] = useState([]);

  //declearing the spinner state value
  const [spinner, setSpinner] = useState(false);

  //setting data based on the GetDataById ApiCall
  useEffect(() => {
    if (productDetailsById !== null) {
      setProduct({
        title: productDetailsById?.data.title,
        price: productDetailsById?.data.price,
        discount: productDetailsById?.data.discount,
        stock: productDetailsById?.data.stock,
        category: productDetailsById?.data.category,
        color: productDetailsById?.data?.color,
        size: JSON.parse(productDetailsById?.data.size),
        image: productDetailsById?.data.image,
        description: productDetailsById?.data.description,
      });
    }
  }, [productDetailsById]);

  //Always need to call the API to get the dropDown data
  useEffect(() => {
    if (getCategoryDataApiCall) {
      getCategoryDataApiCall(1);
    }
  }, [getCategoryDataApiCall]);

  useEffect(() => {
    if (categoryDetailsInProgress) {
      setSpinner(true);
    }
    if (categoryDetailsSuccess) {
      setSpinner(false);
    }
  }, [categoryDetailsInProgress, categoryDetailsSuccess]);

  const handleTextFieldValue = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  //to get the data from dropdown we are using this function
  const handleValueChange = (e) => {
    setProduct({
      ...product,
      category: e.target.value,
    });
  };

  const saveColor = (color) => {
    const filtered = product.color.filter((clr) => clr.color !== color.hex);
    setProduct({
      ...product,
      color: [...filtered, { color: color.hex, id: uuidv4() }],
    });
  };

  const deleteColor = (color) => {
    const filtered = product.color.filter((clr) => clr.color !== color);
    setProduct({ ...product, color: filtered });
  };

  const chooseSize = (ProductSize) => {
    let filtered = product.size.filter((size) => size !== ProductSize);
    console.log(filtered, "chooseZize");
    // setSizeList([...filtered, ProductSize]);
    setProduct({
      ...product,
      size: [...filtered, ProductSize],
    });
  };

  const deleteSize = (productSize) => {
    let filtered = product.size.filter((size) => size !== productSize);
    // setSizeList(filtered);
    setProduct({ ...product, size: filtered });
  };

  const handleDescriptionChange = (value) => {
    setProduct({
      ...product,
      description: value,
    });
  };

  const handleRedirectComponent = () => {
    navigate("/home/products");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let details = {
      title: product.title,
      price: product.price,
      discount: product.discount,
      stock: product.stock,
      category: product.category,
      color: JSON.stringify(product.color),
      size: JSON.stringify(product.size),
      image: product.image,
      description: product.description,
    };
    updateProductById(id, details)
  };

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

        <form onSubmit={handleSubmit}>
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
                      value={product.title}
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
                      value={product.price}
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
                      value={product.discount}
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
                      value={product.stock}
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
                      name="category"
                      value={product.category}
                      handleValueChange={handleValueChange}
                    />
                  )}
                </div>
                <div className="col-lg-6 mt-5">
                  <label>Choose Color</label>
                  <div className="mt-2">
                    <TwitterPicker onChangeComplete={saveColor} />
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <h3>Choose Size</h3>
                  <div className="ProductSizes">
                    {sizes &&
                      sizes.map((size, index) => {
                        return (
                          <>
                            <div
                              className="AllignIndividualProductSizes"
                              onClick={() => chooseSize(size)}
                              key={index}
                            >
                              {size}
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
                <div>
                  <TextEditor
                    value={product.description}
                    setValue={handleDescriptionChange}
                  />
                </div>
                <button className="ProductListSaveBtn" type="submit">
                  Update Product
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <Colors colorsList={product.color} deleteColor={deleteColor} />
              <ProductSizes
                productList={product.size}
                deleteSize={deleteSize}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryDataApiCall: (pageNum) => dispatch(getCategoryDataApi(pageNum)),
    getProductDetailsByIdApiCall: (data) => dispatch(getProductById(data)),
    updateProductById: (id, data) => dispatch(updateProductById(id, data)),
  };
};

const mapStateToProps = ({ category, product }) => {
  return {
    getCategoryDetails: category.categoryDetails,
    categoryDetailsSuccess: category.categoryDetailsSuccess,
    categoryDetailsInProgress: category.categoryDetailsInProgress,
    productDetailsById: product.getProductByIdDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
