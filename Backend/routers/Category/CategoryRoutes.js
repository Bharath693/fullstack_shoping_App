const express = require('express');
const router = express.Router();
const { categoryValidation } = require('../../validations/CategoryValidation');
const { createCategory } = require("../../controllers/category/categoryController")


router.post("/createCategory",categoryValidation,createCategory);

module.exports = router;