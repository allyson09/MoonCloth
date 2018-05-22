var mongoose = require("mongoose");
var Change = mongoose.model("Change");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    getData: function (req, res) {
        Change.find({}, function(err, changeData){
            if(err){
                console.log('womp womp');
            }
            res.json({changeData: changeData});
        }) 
    }
};