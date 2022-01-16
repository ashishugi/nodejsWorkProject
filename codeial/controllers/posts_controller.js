const Post = require("../models/post");

module.exports.posts = function (req, res) {
  res.status(200).json({
    success: true,
    message: "@ the post page",
  });
};
