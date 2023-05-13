const { body } = require('express-validator');

module.exports.categoryValidation = [
    body('name').not().isEmpty().trim().withMessage("category name is required"),
]