const express = require('express');
const route = express.Router();
const CourseLitmitController = require('../app/controller/Site');

route.get('/', CourseLitmitController.index);

module.exports = route;
