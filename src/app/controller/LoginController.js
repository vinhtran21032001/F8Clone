
const account = require('../models/account');
const ModelAccount = require('../models/account');
const JWT = require('jsonwebtoken');

class LoginController {

    index(req, res, next) {
        res.render('login')
    }
    registor(req, res, next) {
       if(req.headers.type == "registor") {
            var username = req.body.username;
            var password = req. body.password;
            ModelAccount.findOne({username: username})
            .then(account => {
                if(account) {
                    return res.json(false) 
                } else {
                new ModelAccount({
                    username : username,
                    password : password,
                }).save();
                    return res.json(true)
                }
        })
       } else {
           var username = req.body.username;
           var password = req.body.password;
           ModelAccount.findOne({
               username : username,
               password : password,
           })
           .then(account => {
               console.log
               if(account) {
                var id = account._id;
                var token = JWT.sign({id}, 'mk');
                res.json({
                    message : true,
                    token : token
                })               
               } else {
                res.json({
                    message : false,
                })
               }
           })
           .catch(err => res.json(err))
       }
    }
}

module.exports = new LoginController;
