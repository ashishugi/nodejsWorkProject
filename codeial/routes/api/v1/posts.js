const express = require("express");

const router = express.Router();
const passport = require("passport");
const postApi = require("../../../controllers/api/v1/post_api");

//  /api/v1/

router.get("/", postApi.index);
router.post("/",postApi.create);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  postApi.destroy
); // /api/v1/posts/id

module.exports = router;
