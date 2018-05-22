var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var OutfitSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    category: String,
    subCategory: String,
    sizes: [],
    quantity: Number,
    colors: []
}, {timestamps: true});

mongoose.model("Outfit", OutfitSchema);