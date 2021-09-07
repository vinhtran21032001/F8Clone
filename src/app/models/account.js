const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var account = new Schema({
    username : String,
    password : String,
    role : Number,
})

module.exports = mongoose.model('account', account)