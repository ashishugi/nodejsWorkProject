const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
// for any router
// router.use('/routerName,require("filename"));

module.exports = router;
