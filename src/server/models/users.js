var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var config = require('../../_config');


var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  }
});

// hash the password before it saving to the db
UserSchema.pre('save', function(next) {
  var user = this;
  // only hash if password is new or being modified
  if(!user.isModified('password')) {
    return next();
  }
  // generate salt
  bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt) {
    if(err) {
      return next(err);
    }
    // hash password
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) {
        return next(err);
      }
      // override the plain-text password with new hashed/salted password
      user.password = hash;
      // go to the next middleware function
      next();
    });
  });
});

// compare password to verify plain text against the hashed password
UserSchema.methods.comparePassword = function(password, done)  {
  bcrypt.compare(password, this.password, function(err, match) {
    if(err) {
      return done(err);
    }
    done(err, match);
  });
};


var User = mongoose.model('user', UserSchema);


module.exports = User;

