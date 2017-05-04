const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// user schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.statics.getUserById = function(id, callback) {
  User.findById(id, callback);
}

UserSchema.statics.getUserByUsername = function(username, callback) {
  let query = {username: username};
  User.findOne(query, callback);
}

UserSchema.statics.addUser = function(newUser, callback) {
  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) throw err;
    if (user) {
      let error = {msg: "Username is already in use"};
      return callback(error);
    } else {
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          newUser.save(callback);
        });
      });
    }
  });
};

UserSchema.statics.authenticate = function(username, password, callback) {
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      let error = {msg: "Wrong username or password"};
      return callback(error);
    } else {
      bcryptjs.compare(password, user.password, (err, result) => {
        if (result == true) {
          return callback(null, user);
        } else {
          let error = {msg: "Wrong username or password"};
          return callback(error);
        }
      });
    }
  });
};


const User = mongoose.model('User', UserSchema);
module.exports = User;
