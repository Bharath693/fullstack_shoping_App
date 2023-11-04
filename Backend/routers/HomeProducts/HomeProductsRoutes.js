const express = require('express');
const router = express.Router();
const { getHomepageProducts } = require("../../controllers/HomeProducts/HomeProductsController")

router.get("/cat-products/:name/:page",getHomepageProducts);

module.exports = router