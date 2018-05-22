var user = require('../controllers/users.js');
var outfit = require('../controllers/outfits.js');
var change = require('../controllers/changes.js');
var order = require('../controllers/orders.js');
var admin = require('../controllers/admins.js');
module.exports = function (app) {

    // ROUTES//
    app.get('/getData', function(req, res) {
        user.getData(req, res);
    })
    app.post('/register', function(req, res) {
        user.register(req, res);
    })
    app.post('/login', function(req, res) {
        user.login(req, res);
    })
    app.get('/logout', function(req, res) {
        user.logout(req, res);
    })
    app.get('/admincheck', function(req, res) {
        user.admincheck(req, res);
    })
    app.get('/getDaylight', function(req, res) {
        outfit.getDaylight(req, res);
    })
    app.post('/createOutfit', function(req, res) {
        admin.createOutfit(req, res);
    })
};