const express = require('express');
const router = express.Router();
const { categoryValidation } = require('../../validations/CategoryValidation');
const { createCategory } = require("../../controllers/category/categoryController");
const { getCategory } = require("../../controllers/category/categoryController");
const { updateCategoryById } = require("../../controllers/category/categoryController")
const { Authorized } = require("../../services/AuthorizationService")


router.post("/createCategory",categoryValidation,createCategory);
router.get("/categories/:page",Authorized, getCategory);
router.put("/updateCategoryByID/:id",Authorized, updateCategoryById)

module.exports = router;