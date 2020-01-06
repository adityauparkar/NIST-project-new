//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema for RECOVER PHASE
var recoverscoreSchema = mongoose.Schema({

    _id: {
      type: String,
      required: true
    },
    csre: {
        type: String,
        required: true
    },
    re1: {
        type: String,
        required: true
    },
    re2: {
        type: String,
        required: true
    },
    re3: {
        type: String,
        required: true
    },
    re4: {
        type: String,
        required: true
    },
    re5: {
        type: String,
        required: true
    },
    re6: {
        type: String,
        required: true
    },
    re7: {
        type: String,
        required: true
    },
    re8: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var RecoverScore = module.exports = mongoose.model('RecoverScoreCollection', recoverscoreSchema); //Binding schema to StudentCollection

//Inserting student Details
module.exports.addRecoverScore = function(recoverscore, callback) {
  console.log("RECOVER PHASE data saving");
    RecoverScore.create(recoverscore, callback);
}

module.exports.getUserById = function(_id, callback) {
    RecoverScore.findById(_id, callback);
}
