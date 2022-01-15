const User = require("../models/user");
const signUpMailer = require("../mailers/signup_mailer");

module.exports.profile = function (req, res) {
  return res.end("<h1>User Profile</h1>");
};

// get the signup data
module.exports.create = function (req, res) {
  const userData = req.body;
  User.findOne({ email: userData.email }, function (err, user) {
    if (err) {
      return res.status(400).json({
        status: false,
        message: "something went wrong, Please try again",
      });
    }

    if (!user) {
      User.create(
        {
          email: userData.email,
          password: userData.password,
          name: userData.name,
        },
        function (err, user) {
          if (err) {
            return;
          }
          signUpMailer.newSignUp();
          return res.status(200).json({
            success: true,
            message: "User successfully saved!",
          });
        }
      );
    } else {
      res.status(200).json({
        success: true,
        message: "Already User exist with same email",
      });
    }
  });
};

// user signIn or login and create a session for user
module.exports.createSession = function (req, res) {
  // after passportjs , control will come here assuming that user is now loggedIn
  return res.json({
    message: "here at createSession, user is loggedIn",
    status: true,
  });
  // const userData = req.body;
  // User.findOne({ email: userData.email }, function (err, user) {
  //   if (err) {
  //     res.status(400);
  //     return;
  //   }
  //   if (user) {
  //     // password does not match
  //     if (user.password !== userData.password) {
  //       res.json({
  //         status: true,
  //         message: "password does not match",
  //       });
  //       return;
  //     }
  //     // if password matches
  //     // res.cookie("user_id", user.id);
  //     res.json({
  //       status: true,
  //       loggedIn: true,
  //       message: "correct credentials",
  //     });
  //   } else {
  //     res.json({
  //       status: true,
  //       message: "No User Found",
  //     });
  //   }
  // });
};
