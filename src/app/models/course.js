  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const course = new Schema({
      name: {type : String},
      desc: {type : String},
      image: {type : String},
      slug: {type: String},
      count: {type: String},
      createAt: {type: Date, default: Date.now},
      updateAt: {type: Date, default: Date.now}

  })

  module.exports = mongoose.model('course', course);