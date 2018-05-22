var mongoose = require("mongoose");
var Outfit = mongoose.model("Outfit");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    getDaylight: function (req, res) {
        console.log('inside get daylight method')
        Outfit.find({}, function (err, outfits){
            console.log('ayyyyyye got outfits!')
            res.json({'outfitRes': outfits})
        });
    }
}