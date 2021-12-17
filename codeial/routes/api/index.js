const express = require("express");

const router = express.Router();

// for api version v1 : /api/v1
router.use("/v1", require("./v1"));

// for api version v2 : /api/v2
router.use("/v2", require("./v2"));

module.exports = router;
