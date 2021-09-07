{
    const {multiMongooToObject, mongooToObject} = require('../mongoToObject');
    const detailcourse = require('../../app/models/detailcoure')
    function renderCourseDetail(req, res, path) {
        detailcourse.find({
            slug : path     
        })
        .then(courses => {
            courses = multiMongooToObject(courses)
            if(req.query.q || req.query.q > 0) {
                detailcourse.findOne({
                    lessonID: req.query.q,
                    slug : path
                })
            .then(lesson => {
                mongooToObject(lesson)
                res.render('html-css', {
                    data : {
                        courses : courses,
                        lesson : lesson.videoID
                    }
                })
            })
            } else {
                res.redirect(path + '?q=1')
            }
            
        })
    }
}

module.exports = {renderCourseDetail}