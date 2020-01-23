//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema for IDENTIFY PHASE
var UserSchema = mongoose.Schema({


    _id: {
      type: String,
      required: true
    },
    orgn: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
  password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//Exporting the file
var UserData = module.exports = mongoose.model('UserCollection', UserSchema); //Binding schema to StudentCollection

//Inserting student Details
module.exports.addUser = function(creds, callback) {
  console.log("Userdata saved to database");
    UserData.create(creds, callback);
}

module.exports.getUserById = function(_id, callback) {
    UserData.findById(_id, callback);
}
