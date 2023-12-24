import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../../reuse/inputfield";
import { getCategoryDataApi } from "../../Categories/store/dispatchers";
import { postProductDataApi } from "../store/dispatchers";
import { connect } from "react-redux";
import Dropdown from "../../../reuse/Dropdown";
import Spinner from "../../../reuse/Spinner";
import { TwitterPicker } from "react-color";
import { v4 as uuidv4 } from "uuid";
import Colors from "./colors";
import ProductSizes from "./ProductSizes";
import ImagePreview from "./ImagePreview";
import "./ProductList.scss";
import TextEditor from "../../../reuse/TextEditor";

const ProductList = ({
  getCategoryDetails,
  getCategoryDataApiCall,
  categoryDetailsSuccess,
  categoryDetailsInProgress,
  createProduct,
}) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    color: [],
    size:[],
    image:'',
    description:''
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

  //declearing this state inorder to get image Url
  const [preview, setPreview] = useState({
    image : ''
  })

  const handleTextFieldValue = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleRedirectComponent = () => {
    navigate("/home/products");
  };

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
    let filtered = sizeList.filter((size) => size !== ProductSize);
    setSizeList([...filtered, ProductSize]);
    setProduct({
      ...product,
      size: [...filtered, ProductSize]
    })
  };

  const deleteSize = (productSize) => {
    let filtered = sizeList.filter((size) => size !== productSize);
    setSizeList(filtered);
    setProduct({...product, size: filtered})
  };

  const onImageChange = (e) =>{
    if(e.target.files.length !== 0) {
      setProduct({
        ...product,
        [e.target.name]:e.target.files[0]
       })
       let reader = new FileReader();
       reader.onloadend = () =>{
          setPreview({
            ...preview,
            [e.target.name]:reader.result
          })
       }
       reader.readAsDataURL(e.target.files[0])
    }
  }

 const handleDescriptionChange = (value) =>{
     setProduct({
      ...product,
      description: value
     })
 }

 //on handleSubmit if their is a image which has to be sent to the api then we need to send
 //formData to the backend in headers the content type should be multipart/form-data
 const handleSubmit = (e) =>{
     e.preventDefault();
     const formData = new FormData();
     formData.append('title',product.title)
     formData.append('price', product.price)
     formData.append('discount', product.discount)
     formData.append('stock', product.stock)
     formData.append('category', product.category)
    //  formData.append('color',JSON.stringify(product.color))
     formData.append('size', JSON.stringify(product.size))
     formData.append('image',product.image)
     formData.append('description',product.description);
     /* this for loop is used to get the values of formData Object,because if you nor,ally console the formData
      it is not giving the output */

      product.color.forEach((colorObj, index) => {
        formData.append(`color[${index}][color]`, colorObj.color);
        formData.append(`color[${index}][id]`, colorObj.id);
    });

    //  for (const [key, value] of formData.entries()) {
    //   console.log(key, value,"165");
    // }

     createProduct(formData)
 }

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
                <div className="InputFileContainer">
                    <label>Image 1</label>
                    <input type="file" className="input-file" name="image" onChange={onImageChange}/>
                </div>
                <div>
                  <TextEditor value={product.description} setValue={handleDescriptionChange}/>
                </div>
                <button className="ProductListSaveBtn" type="submit">Save Product</button>
              </div>
            </div>
            <div className="col-lg-4">
              <Colors colorsList={product.color} deleteColor={deleteColor} />
              <ProductSizes productList={sizeList} deleteSize={deleteSize} />
              <ImagePreview url={preview} heading="image"/>
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