const { ExpressHandlebars } = require("express-handlebars");
const course = require('../models/course');

class CourseLitmitController {
    index(req ,res, next) {
        course.find({}).limit(6)
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('home',{courses})
            }) 
    }
}

module.exports = new CourseLitmitController;