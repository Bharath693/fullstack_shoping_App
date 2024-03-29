const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProduct, updateProductById, deleteProductById } = require("../../controllers/Product/ProductController");
const { productValidation } = require("../../validations/ProductValidations")
const { Authorized } = require("../../services/AuthorizationService");
const path = require('path')


router.use("/uploads",express.static('uploads'));

// console.log(upload,"upload")
/*created post Api for Product but unable to see the image in the data base need to check that while 
creating the get Api */
router.post("/createproduct",Authorized, productValidation, createProduct)
router.get("/getAllProducts/:page", Authorized, getProducts)
router.get("/getProductById/:id", Authorized, getProduct)
router.put("/updateProductById/:id", Authorized, updateProductById)
router.delete("/deleteProductById/:id", Authorized, deleteProductById)

module.exports = router