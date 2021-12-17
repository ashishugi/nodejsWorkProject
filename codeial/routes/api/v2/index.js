const express = require("express");

const router = express.Router();

// for api version v1 : /api/v1
router.use("/posts", require("./posts"));

module.exports = router;
