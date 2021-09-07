const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const detalcourse = new Schema({
    name : {type : String},
    videoID : {type: String},
    lessonID: {type: String},
    slug: {type: String},
})

module.exports = mongoose.model('detailcourse', detalcourse);