const express = require('express');
const router = express.Router();
const { createProduct } = require("../../controllers/Product/ProductController");
const { productValidation } = require("../../validations/ProductValidations")
const { Authorized } = require("../../services/AuthorizationService");

router.use(express.static(__dirname+"./public/"));

// console.log(upload,"upload")
/*created post Api for Product but unable to see the image in the data base need to check that while 
creating the get Api */
router.post("/createproduct",Authorized, productValidation, createProduct)

module.exports = router