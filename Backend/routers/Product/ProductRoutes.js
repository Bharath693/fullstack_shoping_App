const express = require('express');
const router = express.Router();
const { createProduct } = require("../../controllers/Product/ProductController");
const { productValidation } = require("../../validations/ProductValidations")
const { Authorized } = require("../../services/AuthorizationService");

router.use(express.static(__dirname+"./public/"));

// console.log(upload,"upload")
router.post("/createproduct",Authorized, productValidation, createProduct)

module.exports = router