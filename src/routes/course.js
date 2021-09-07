const express = require('express');
const route = express.Router();
const CourseController = require('../app/controller/CourseController');


route.get('/:slug',CourseController.checkLogin,CourseController.slug)
route.get('/',CourseController.checkLogin, CourseController.index);

module.exports = route;
