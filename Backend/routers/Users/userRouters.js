const express = require('express');
const router = express.Router();
const { registerValidations, loginValidations } = require('../../validations/userValidations');
const { register, login } = require('../../controllers/users/userController');
const { Authorized } = require('../../services/AuthorizationService')

router.post("/register",registerValidations,register);

router.post("/login",loginValidations,login)

module.exports = router