const express = require('express');
const router = express.Router();
const { createProduct } = require("../../controllers/Product/ProductController");
const { Authorized } = require("../../services/AuthorizationService")
const multer = require('multer');


router.use(express.static(__dirname+"./public/"));

// console.log(upload,"upload")
router.post("/createproduct",Authorized, createProduct)

module.exports = router