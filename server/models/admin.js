var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var AdminSchema = new mongoose.Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    changes_: [{
        type: Schema.Types.ObjectId, 
        ref: 'Change'
    }]
}, {timestamps: true});

mongoose.model("Admin", AdminSchema);