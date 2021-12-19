const User = require("../../../models/user");
const Post = require("../../../models/post");

module.exports.index = async function (req, res) {
  let users = await User.find({});
  return res.json(200, {
    message: "Lists of Posts",
    posts: users,
  });
};

// creating post
module.exports.create = async function (req, res) {
  try {
    let post = await Post.create({
      content: req.body.content,
      user: req.user._id,
    });
    if (req.xhr) {
      // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
      post = await post.populate("user", "name").execPopulate();

      return res.status(200).json({
        data: {
          post: post,
        },
        message: "Post created!",
      });
    }
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
