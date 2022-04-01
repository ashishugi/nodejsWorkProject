const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postsController = require("../controllers/posts_controller");

router.post("/", auth, postsController.posts);
router.get("/", postsController.getPosts);
module.exports = router;
