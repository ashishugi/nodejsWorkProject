const User = require("../../../models/user");
const jwt = require("jsonwebtoken");

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user || user.password !== req.body.password) {
      res.status(422).json({
        // 422 -> invalid input by user
        success: false,
        message: "Wrong User or Password",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Sign In Success",
      data: {
        // here is the key 'codeial' is for encryption , expiresIn (milliseconds)
        token: jwt.sign(user.toJSON(), "codeial", { expiresIn: "1000000" }),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};
