const express = require('express');
const { signup } = require('../controllers/auth.controller');
const authRoute = express.Router();

authRoute.get('/signup', signup);

module.exports = authRoute;