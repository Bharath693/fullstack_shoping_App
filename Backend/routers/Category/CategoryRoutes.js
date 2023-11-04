const express = require('express');
const router = express.Router();
const { categoryValidation } = require('../../validations/CategoryValidation');
const { createCategory } = require("../../controllers/category/categoryController");
const { getCategory } = require("../../controllers/category/categoryController");
const { updateCategoryById } = require("../../controllers/category/categoryController");
const { deleteCategoryById, allCategories, randomCategory } = require("../../controllers/category/categoryController")
const { Authorized } = require("../../services/AuthorizationService")


router.post("/createCategory",categoryValidation,createCategory);
router.get("/categories/:page",Authorized, getCategory);
router.put("/updateCategoryByID/:id",Authorized, updateCategoryById);
router.delete("/deleteCategoryByID/:id",Authorized, deleteCategoryById);
router.get("/allCategories", allCategories )
router.get("/random-category", randomCategory)

module.exports = router;