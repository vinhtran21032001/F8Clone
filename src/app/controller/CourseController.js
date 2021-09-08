const ModelAccount = require('../models/account')
const course = require('../models/course');
const detailcourse = require('../models/detailcoure')
const {multiMongooToObject, mongooToObject} = require('../../ulti/mongoToObject');
const {renderCourseDetail} = require('../../ulti/renderCoursedetail/renderCoursedetail');
const JWT = require('jsonwebtoken');
class CourseController {
    index(req ,res, next) {
        course.find({})
            .then(courses => {
                courses = multiMongooToObject(courses)
                res.render('courses',{courses})
            }) 
            .catch(err=>res.json(err))
    }
    slug(req, res, next) {
        var path = req.originalUrl.split('?')[0]
        if(path == "/courses/html-css" || path == "/courses/javascript" ||
         path == "/courses/javascript-nang-cao" || path == "/courses/nodejs" || 
         path == "/courses/responsive" || path == "/courses/dont-touch-your-face" ||
         path =="/courses/kien-thuc-nhap-mon") {
            renderCourseDetail(req, res, path);
         } else {
            res.json('vui long kiem tra lai duong dan')
         }
    }
    checkLogin(req, res, next) {
        if(req.cookies.token) {
            var token = req.cookies.token
            var id = JWT.verify(token, 'mk')
            ModelAccount.findOne({_id : id.id})
            .then(data=> {
                if(data != null) {
                    next()
                } else {
                    res.redirect('/login')
                }
            })
            .catch(err=> res.json(err))
        } else {
            res.redirect('/login')
        }

        
    }
}

module.exports = new CourseController;