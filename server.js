var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/angular/dist'));

require('./server/config/dbConnector.js');
require('./server/config/passport');

app.use(passport.initialize());
var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

app.listen(9001, function(){
    console.log(__dirname);
    console.log("Listening on port 9001");
});