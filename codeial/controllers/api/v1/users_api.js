const User = require("../../../models/user");
const jwt = require("jsonwebtoken");

module.exports.index = async function (req, res) {
  let users = await User.find({});
  return res.json(200, {
    message: "Lists of users",
    users: users,
  });
};

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

module.exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      console.log(user.token);
      // user
      res.status(200).json({
        success: true,
        data: {
          token: token,
        },
      });
      return;
    }
    res.status(200).send("Invalid Credentials");
  } catch (err) {
    console.log;
    console.log(err);
  }
};

module.exports.update = async function (req, res) {
  console.log("@update", req.params, req.body);
  const userId = req.body.user.id;
  if (userId) {
    try {
      let user = await User.findById(userId);
      console.log("found user", user);
      User.uploadedAvatar(req, res, function (err) {
        if (err) {
          return res.status(200).json({
            success: false,
            error: "error occured while uploading --> multer error",
          });
        }
        console.log(req.file);
        return res.status(200).json({
          success: true,
          message: "uploaded successfully",
        });
      });
    } catch (err) {
      return res.status(200).json({
        success: false,
        error: err,
      });
    }
  } else {
    res.status(200).json({
      success: false,
      message: "userId does not exist",
    });
  }
};
