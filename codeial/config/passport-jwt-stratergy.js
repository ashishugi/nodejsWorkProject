const passport = require("passport");
const JWTStratergy = require("passport-jwt").Strategy;
//extract jwt from header
const ExtractJWT = require("passport-jwt").ExtractJwt;
// we will be userModel for authentication
const User = require("../models/user");

//options
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  // this is secret key for encryption and decryption
  secretOrKey: "codeial", // this is key will be used for decryption of the token
};

passport.use(
  new JWTStratergy(opts, function (jwtPayLoad, done) {
    // it reads the data from JWT string
    User.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        console.log("error in finding user from JWT");
        return;
      }
      if (user) {
        // user found
        return done(null, user);
      } else {
        return done(null, false); // false means that the user is not found
      }
    });
  })
);

module.exports = passport;
