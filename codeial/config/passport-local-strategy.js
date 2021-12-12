const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy;

const User = require("../models/user");

// sign-in user
passport.use(
  new LocalStratergy(
    {
      // unique field
      usernameField: "email",
    },
    function (email, password, done) {
      // find a user and establish the identity (new User)
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("error in finding the user --> Passport");
          return done(err);
        }
        if (!user || user.password !== password) {
          console.log("invalid username and password");
          return done(null, false); // , false ==> means auth is failed
        }
        return done(null, user);
      });
    }
  )
);

// serilizing the user to decide which key to  kept in cookie
passport.serializeUser(function (user, done) {
  done(null, user.id); // we are taking user.id as the primary Key to find the user from cookie/ DB
});

// desrializing the user from the cookie
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("error in finding the user --> Passport");
      return done(err);
    }
    return done(null, user);
  });
});

module.exports = passport;
    