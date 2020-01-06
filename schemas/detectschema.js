//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema for DETECT PHASE
var detectscoreSchema = mongoose.Schema({

    _id: {
      type: String,
      required: true
    },
    csd: {
        type: String,
        required: true
    },
    d1: {
        type: String,
        required: true
    },
    d2: {
        type: String,
        required: true
    },
    d3: {
        type: String,
        required: true
    },
    d4: {
        type: String,
        required: true
    },
    d5: {
        type: String,
        required: true
    },
    d6: {
        type: String,
        required: true
    },
    d7: {
        type: String,
        required: true
    },
    d8: {
        type: String,
        required: true
    },
    d9: {
        type: String,
        required: true
    },
    d10: {
        type: String,
        required: true
    },
    d11: {
        type: String,
        required: true
    },
    d12: {
        type: String,
        required: true
    },
    d13: {
        type: String,
        required: true
    },
    d14: {
        type: String,
        required: true
    },
    d15: {
        type: String,
        required: true
    },
    d16: {
        type: String,
        required: true
    },
    d17: {
        type: String,
        required: true
    },
    d18: {
        type: String,
        required: true
    },
    d19: {
        type: String,
        required: true
    },
    d20: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var DetectScore = module.exports = mongoose.model('DetectScoreCollection', detectscoreSchema); //Binding schema to StudentCollection

//Inserting student Details
module.exports.addDetectScore = function(detectDetectscore, callback) {
  console.log("DETECT PHASE data saving");
    DetectScore.create(detectscore, callback);
}
module.exports.getUserById = function(_id, callback) {
    DetectScore.findById(_id, callback);
}
