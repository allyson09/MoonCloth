var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var Admin = mongoose.model("Admin");
var Outfit = mongoose.model("Outfit");

module.exports = {
    createOutfit: function (req, res) {
        var outfit = new Outfit(req.body);
        outfit.save(function(err, outfitData){
            if(err){
                console.log('womp womp outfit not added');
            }
            else{
                console.log('ayyyyyyyye! outfit added');
            }
        })
    }
};