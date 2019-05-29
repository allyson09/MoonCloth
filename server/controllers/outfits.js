var mongoose = require("mongoose");
var Outfit = mongoose.model("Outfit");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    getDaylight: function (req, res) {
        Outfit.find({}, function (err, outfits){
            res.json({'outfitRes': outfits});
        });
    },
    daylightTest: function (req, res) {
        console.log('made it to test method');
    },
    // lovesTest: function (req, res) {
    //     console.log('made it to test method');
    // },
    getLikedOutfits: function (req, res) {
        User.findOne({_id: req.session.user})
        .then((user) => {
            if(!user) {
                res.json({'error': 'error finding logged user in get liked outfits'});
            }
            if(user) {
                console.log('user in get liked outfits', user);
                Outfit.find({}, function (err, outfits){
                    var likedObjects = [];
                    for(var i = 0; i < user.loves_.length; i++) {
                        for(var x = 0; x < outfits.length; x++) {
                            if(user.loves_[i].toString() === outfits[x]._id.toString()) {
                                likedObjects.push(outfits[x]);
                            }
                        }
                    }
                    res.json({'loveList': likedObjects});
                });
            }
        });
    }
};