const express = require("express");

const router = express.Router();
const postApi = require("../../../controllers/api/v1/post_api");

//  /api/v1/

router.get("/", postApi.index);
router.delete("/:id", postApi.destroy); // /api/v1/posts/id

module.exports = router;
