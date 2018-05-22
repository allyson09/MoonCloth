var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var ChangeSchema = new mongoose.Schema({
    description: String,
    users_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true});

mongoose.model("Change", ChangeSchema);