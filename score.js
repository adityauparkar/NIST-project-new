//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema
var identifyscoreSchema = mongoose.Schema({

    _id: {
      type: String,
      required: true
    },
    csi: {
        type: String,
        required: true
    },
    i1: {
        type: String,
        required: true
    },
    i2: {
        type: String,
        required: true
    },
    i3: {
        type: String,
        required: true
    },
    i4: {
        type: String,
        required: true
    },
    i5: {
        type: String,
        required: true
    },
    i6: {
        type: String,
        required: true
    },
    i7: {
        type: String,
        required: true
    },
    i8: {
        type: String,
        required: true
    },
    i9: {
        type: String,
        required: true
    },
    i10: {
        type: String,
        required: true
    },
    i11: {
        type: String,
        required: true
    },
    i12: {
        type: String,
        required: true
    },
    i13: {
        type: String,
        required: true
    },
    i14: {
        type: String,
        required: true
    },
    i15: {
        type: String,
        required: true
    },
    i16: {
        type: String,
        required: true
    },
    i17: {
        type: String,
        required: true
    },
    i18: {
        type: String,
        required: true
    },
    i19: {
        type: String,
        required: true
    },
    i20: {
        type: String,
        required: true
    },
    i21: {
        type: String,
        required: true
    },
    i22: {
        type: String,
        required: true
    },
    i23: {
        type: String,
        required: true
    },
    i24: {
        type: String,
        required: true
    },
    i25: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//Exporting the file
var Score = module.exports = mongoose.model('IdentifyScoreCollection', identifyscoreSchema); //Binding schema to StudentCollection

//Inserting student Details
module.exports.addScore = function(score, callback) {
  console.log("HELLO");
    Score.create(score, callback);
}
