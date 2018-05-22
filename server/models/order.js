var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var OrderSchema = new mongoose.Schema({
    total: Number,
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    items_: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
}, {timestamps: true});

mongoose.model("Order", OrderSchema);