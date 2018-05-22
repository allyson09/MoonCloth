var mongoose = require("mongoose");
var Order = mongoose.model("Order");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    getData: function (req, res) {
        Order.find({}, function(err, orderData){
            if(err){
                console.log('womp womp');
            }
            res.json({orderData: orderData});
        }) 
    }
};