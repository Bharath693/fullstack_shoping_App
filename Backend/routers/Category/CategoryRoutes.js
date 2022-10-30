const express = require('express');
const { categoryValidation } = require('../../validations/CategoryValidation')
const router = express();

router.post("/createCategory",categoryValidation)