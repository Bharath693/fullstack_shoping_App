const { body } = require('express-validator');

module.exports.productValidation = [
    body('title').not().isEmpty().trim().withMessage("Product title is required"),
]