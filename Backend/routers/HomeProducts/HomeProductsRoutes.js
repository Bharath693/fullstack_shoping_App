const express = require('express');
const router = express.Router();
const { getHomepageProducts, getHomeProductDetails } = require("../../controllers/HomeProducts/HomeProductsController")

router.get("/cat-products/:name/:page",getHomepageProducts);
router.get("/cat-products/:id",getHomeProductDetails)

module.exports = router