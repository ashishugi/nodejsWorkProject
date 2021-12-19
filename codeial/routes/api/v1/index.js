const express = require("express");

const router = express.Router();

//  /api/v1/
router.use("/posts", require("./posts"));
router.use("/users", require("./users"));

module.exports = router;
