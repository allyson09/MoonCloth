var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    register: function (req, res) {
        console.log('registering', req.body);
        var user = new User(req.body);
        user.save(function(err, userData){
            if(err){
                return res.json({'err': 'This user already exists.'});
            }
            else{
                req.session.name = req.body.firstName;
                req.session.user = req.body._id;
                req.session.email = req.body.email;
                req.session.admin = req.body.admin;
                res.json({'loggedId': req.session.user, 'loggedName': req.session.name, 'loggedEmail': req.session.email, 'admin': req.session.admin});
            }
        });
    },
    login: function (req, res) {
        User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                return res.json({'err': 'That email does not exist.'});
            }
            else if (user.password !== req.body.password) {
                return res.json({'err': 'That is the wrong password.'});
            }
            else {
                req.session.user = user._id;
                req.session.name = user.firstName;
                req.session.email = user.email;
                req.session.admin = user.admin;
                res.json({'loggedId': req.session.user, 'loggedName': req.session.name, 'loggedEmail': req.session.email, 'admin': req.session.admin});
            }
        });
    },
    loggedUser: function(req, res){
        console.log('IN CONTROLLER TO FIND LOGGED USER');
        res.json({'loggedUserId': req.session.user, 'loggedUserEmail': req.session.email});
    },
    logout: function (req, res) {
        req.session.destroy();
    },
    admincheck: function (req, res) {
        if (req.session.admin === 'yay') {
            res.json({'admin': req.session.admin});
        } else {
            res.json({'admin': req.session.admin});
        }
    },
    likeOutfit: function (req, res) {
        if(req.session.user == undefined) {
            res.json({'err': 'notLogged'});
        }
        User.findOne({_id: req.session.user})
        .then((user) => {
            if(!user) {
            }
            if(user) {
                console.log('liking', req.body.id);
                var loveList = user.loves_;
                loveList.push(req.body.id.toString());
                console.log('new list', loveList);
                User.update({_id: req.session.user}, {$set: {loves_: loveList}}, function(err){
                    if (err){
                        res.json({'err': 'error updating User'});
                    }     
                });
            }
        });
    },
    dislikeOutfit: function (req, res) {
        if(req.session.user == undefined) {
            res.json({'err': 'notLogged'});
        }
        User.findOne({_id: req.session.user})
        .then((user) => {
            if(!user) {
            }
            if(user) {
                console.log('list before', user.loves_);
                user.loves_.splice(user.loves_.indexOf(req.body.id.toString()),1);
                console.log('list after', user.loves_, req.body.id);
                User.update({_id: req.session.user}, {$set: {loves_: user.loves_}}, function(err){
                    if (err){
                        res.json({'err': 'error updating User'});
                    }     
                });
            }
        });
    }
};