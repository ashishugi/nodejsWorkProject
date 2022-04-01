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
  const data = req.body;
  try {
    Post.create(
      {
        content: req.body.content,
        user: req.body.user._id,
      },
      function (err, post) {
        if (err) {
          console.log("err in creating form");
          return res.json({
            success: false,
            message: "some error occured",
          });
        }
        return res.json({
          success: true,
          message: "saved successfully",
          data: {
            post: post,
          },
        });
      }
    );
  } catch (err) {
    console.log("+", err);
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
