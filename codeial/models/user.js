const mongoose = require("mongoose");

const multer = require("multer");
const path = require("path");
const AVATAR_PATH = path.join("uploads/users/avatars");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      // path of the uploaded file will be stored here
      type: String,
    },
  },
  {
    // createdAt, updatedAt
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH)); // __dirname give current folder/directory path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// static function to be here

userSchema.static.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
); // single indicates only single file for avatar will be uploaded not multiple

userSchema.static.avatarPath = AVATAR_PATH; // this save the path to user schema and it will be publicly available

const User = mongoose.model("User", userSchema);

module.exports = User;
