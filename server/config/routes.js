var user = require('../controllers/users.js');
var outfit = require('../controllers/outfits.js');
var admin = require('../controllers/admins.js');
var path = require('path');
var secrets = require('../../secrets');
var jwt = require('express-jwt');
var auth = jwt({
    secret: secrets.shhhh,
    userProperty: 'payload'
});

module.exports = function (app) {

    // ROUTES//
    app.get('/getData', function(req, res) {
        user.getData(req, res);
    });
    app.post('/register', function(req, res) {
        user.register(req, res);
    });
    app.post('/login', function(req, res) {
        user.login(req, res);
    });
    app.get('/logout', function(req, res) {
        user.logout(req, res);
    });
    app.get('/admincheck', function(req, res) {
        user.admincheck(req, res);
    });
    app.get('/getDaylight', function(req, res) {
        outfit.getDaylight(req, res);
    });
    app.get('/admin', auth, ctrlProfile.profileRead, function(req, res) {
        outfit.getDaylight(req, res);
    });
    // app.get('/daylight', function(req, res) {
    //     console.log('got to test route');
    //     outfit.daylightTest(req, res);
    // });
    // app.get('/loves', function(req, res) {
    //     console.log('got to second test route');
    //     outfit.lovesTest(req, res);
    // });
    app.get('/getLikedOutfits', function(req, res) {
        outfit.getLikedOutfits(req, res);
    });
    app.post('/createOutfit', function(req, res) {
        admin.createOutfit(req, res);
    });
    app.post('/likeOutfit', function(req, res) {
        user.likeOutfit(req, res);
    });
    app.post('/dislikeOutfit', function(req, res) {
        console.log('req in routes', req);
        user.dislikeOutfit(req, res);
    });
    app.get('/loggedUser', function(req, res) {
        user.loggedUser(req, res);
    });
    app.get('/*', function(req, res) {
        res.sendfile(path.resolve('angular/dist/index.html'));
    });
};