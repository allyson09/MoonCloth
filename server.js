var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var session = require('express-session');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/angular/dist'));
app.use(session({secret: 'seeeeeecreeeeeeet'}));

require('./server/config/dbConnector.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(9001, function(){
    console.log(__dirname);
    console.log("Listening on port 9001");
});