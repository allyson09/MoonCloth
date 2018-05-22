var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var AdminSchema = new mongoose.Schema({
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true});

mongoose.model("Admin", AdminSchema);