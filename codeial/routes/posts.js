const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postsController = require("../controllers/posts_controller");

router.post("/", auth, postsController.posts);
module.exports = router;
