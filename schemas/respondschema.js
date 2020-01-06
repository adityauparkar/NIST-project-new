//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema for RESPOND PHASE
var respondscoreSchema = mongoose.Schema({

    _id: {
      type: String,
      required: true
    },
    csr: {
        type: String,
        required: true
    },
    r1: {
        type: String,
        required: true
    },
    r2: {
        type: String,
        required: true
    },
    r3: {
        type: String,
        required: true
    },
    r4: {
        type: String,
        required: true
    },
    r5: {
        type: String,
        required: true
    },
    r6: {
        type: String,
        required: true
    },
    r7: {
        type: String,
        required: true
    },
    r8: {
        type: String,
        required: true
    },
    r9: {
        type: String,
        required: true
    },
    r10: {
        type: String,
        required: true
    },
    r11: {
        type: String,
        required: true
    },
    r12: {
        type: String,
        required: true
    },
    r13: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var RespondScore = module.exports = mongoose.model('RespondScoreCollection', respondscoreSchema); //Binding schema to StudentCollection

//Inserting student Details
module.exports.addRespondScore = function(respondscore, callback) {
  console.log("RESPOND PHASE data saving");
    RespondScore.create(respondscore, callback);
}
module.exports.getUserById = function(_id, callback) {
    RespondScore.findById(_id, callback);
}
