var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    orders_: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    loves_: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    admin : String,
    changes_: [{ type: Schema.Types.ObjectId, ref: 'Change' }]
}, {timestamps: true});

mongoose.model("User", UserSchema);