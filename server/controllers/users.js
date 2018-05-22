var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    register: function (req, res) {
        var user = new User(req.body);
        user.save(function(err, userData){
            if(err){
                console.log('womp womp');
            }
            else{
                req.session.name = req.body.firstName;
                req.session.user = req.body._id;
                req.session.email = req.body.email;
                req.session.admin = req.body.admin;
                console.log('admin status', req.body.admin);
                console.log('ayyyyyye!')
                res.json({'loggedId': req.session.user, 'loggedName': req.session.name, 'loggedEmail': req.session.email, 'admin': req.session.admin});
            }
        });
    },
    login: function (req, res) {
        User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                console.log('womp womp no user');
                return res.json({'err': 'That email does not exist.'});
            }
            else if (user.password !== req.body.password) {
                console.log('womp womp not the password');
                return res.json({'err': 'That is the wrong password.'});
            }
            else {
                console.log('ayyyyyyyye saving to session');
                req.session.user = user._id;
                req.session.name = user.firstName;
                req.session.email = user.email;
                req.session.admin = user.admin;
                res.json({'loggedId': req.session.user, 'loggedName': req.session.name, 'loggedEmail': req.session.email, 'admin': req.session.admin});
            }
        })
    },
    logout: function (req, res) {
        console.log('ABOUT TO DESTROY!!! YAAAAAAAAAH!!!');
        req.session.destroy();
    },
    admincheck: function (req, res) {
        console.log('got to admincheck');
        if (req.session.admin === 'yay') {
            console.log('ayyyyye you an admin! okaaaaaay!');
            res.json({'admin': req.session.admin})
        } else {
            console.log('nooooooope!');
            res.json({'admin': req.session.admin})
        }
    }
};