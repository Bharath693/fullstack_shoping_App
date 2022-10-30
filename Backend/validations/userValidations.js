const { body } = require('express-validator')

module.exports.registerValidations = [
    body('name').not().isEmpty().trim().withMessage("name is required"),
    body('email').isEmail().normalizeEmail().withMessage("email is required"),
    body('password').isLength({min:8}).trim().withMessage("password should be minimum of 8 characters long"),
  ];

  module.exports.loginValidations = [
    body('email').not().isEmpty().withMessage("email is required"),
    body('password').isLength({min:8}).not().isEmpty().trim().withMessage("password is required"),
  ];