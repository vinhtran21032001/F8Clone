const express = require('express');
const route = express.Router();
const LoginController = require('../app/controller/LoginController');

route.get('/', LoginController.index);
route.post('/', LoginController.registor)

module.exports = route;
