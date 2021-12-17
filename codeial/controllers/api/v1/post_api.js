const User = require("../../../models/user");

module.exports.index = async function (req, res) {
  let users = await User.find({});
  return res.json(200, {
    message: "Lists of Posts",
    posts: users,
  });
};

module.exports.destroy = async function (req, res) {
  try {
    let user = await User.findById(req.params.id);
    console.log("@destroy");
    console.log(req.params.id);
    user.remove();
    res.status(200).json({
      message: "User is deleted successfully",
    });
  } catch (e) {
    console.log(e);
    return res.json(500, {
      message: "something went wrong",
    });
  }
};
