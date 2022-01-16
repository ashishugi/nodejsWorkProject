const User = require("../../../models/user");
const Post = require("../../../models/post");

module.exports.index = async function (req, res) {
  let post = await Post.find({});
  return res.json(200, {
    message: "Lists of Posts",
    posts: post,
  });
};

// creating post
module.exports.create = async function (req, res) {
  console.log("request reached here");
  console.log(req.body);
  try {
    Post.create(
      {
        content: req.body.content,
        user: req.body.user._id,
      },
      function (err, post) {
        if (err) {
          console.log("err in creating form");
        }
      }
    );
  } catch (err) {
    return res.json(500).json({
      message: "Internal Server Error",
    });
  }
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
