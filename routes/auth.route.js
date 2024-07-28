const express = require('express');
const { signup } = require('../controllers/auth.controller');
const { userSignupValidator } = require('../validation/auth.validation');
const { runValidation } = require('../validation/index.validation');
const authRoute = express.Router();

authRoute.post('/signup', userSignupValidator, runValidation, signup);

module.exports = authRoute;