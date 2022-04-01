const Post = require("../models/post");

module.exports.posts = function (req, res) {
  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
    },
    function (err, post) {
      if (err) {
        console.log("err in creating form");
      }
    }
  );
  res.status(200).json({
    success: true,
    message: "@ the post page",
  });
};

module.exports.getPosts = async function (req, res) {
  try {
    const postData = await Post.find({});
    if (postData) {
      return res.status(200).json({
        success: true,
        data: {
          posts: postData,
        },
      });
    }
    return res.status(200).json({
      success: false,
      error: "someerror occured",
    });
  } catch (err) {}
};
