var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secrets = require('../../secrets');


var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    orders_: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Order' 
    }],
    loves_: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Item' 
    }],
    admin : String,
    hash: String,
    salt: String
}, {timestamps: true});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.firstName,
        exp: parseInt(expiry.getTime() / 1000)
    }, secrets.shhhh);
};

mongoose.model("User", userSchema);