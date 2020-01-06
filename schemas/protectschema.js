//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema for PROTECT PHASE
var protectscoreSchema = mongoose.Schema({

    _id: {
      type: String,
      required: true
    },
    csp: {
        type: String,
        required: true
    },
    p1: {
        type: String,
        required: true
    },
    p2: {
        type: String,
        required: true
    },
    p3: {
        type: String,
        required: true
    },
    p4: {
        type: String,
        required: true
    },
    p5: {
        type: String,
        required: true
    },
    p6: {
        type: String,
        required: true
    },
    p7: {
        type: String,
        required: true
    },
    p8: {
        type: String,
        required: true
    },
    p9: {
        type: String,
        required: true
    },
    p10: {
        type: String,
        required: true
    },
    p11: {
        type: String,
        required: true
    },
    p12: {
        type: String,
        required: true
    },
    p13: {
        type: String,
        required: true
    },
    p14: {
        type: String,
        required: true
    },
    p15: {
        type: String,
        required: true
    },
    p16: {
        type: String,
        required: true
    },
    p17: {
        type: String,
        required: true
    },
    p18: {
        type: String,
        required: true
    },
    p19: {
        type: String,
        required: true
    },
    p20: {
        type: String,
        required: true
    },
    p21: {
        type: String,
        required: true
    },
    p22: {
        type: String,
        required: true
    },
    p23: {
        type: String,
        required: true
    },
    p24: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var ProtectScore = module.exports = mongoose.model('ProtectScoreCollection', protectscoreSchema); //Binding schema to StudentCollection

//Inserting student Details
module.exports.addProtectScore = function(protectscore, callback) {
  console.log("PROTECT PHASE data saving");
    ProtectScore.create(protectscore, callback);
}
module.exports.getUserById = function(_id, callback) {
    ProtectScore.findById(_id, callback);
}
