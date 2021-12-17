const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
// for any router
// router.use('/routerName,require("filename"));

// for /api

router.use("/api", require("./api"));
module.exports = router;
