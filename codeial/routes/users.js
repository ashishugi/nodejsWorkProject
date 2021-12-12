const express = require("express");
const router = express.Router();
const passport = require("passport");

const usersController = require("../controllers/users_controller");

router.get("/", usersController.profile);
router.post("/create", usersController.create);
// using passport for signIn, use passport as a middleware to authenticate
router.post(
  "/signin",
  passport.authenticate(
    "local", // stratergy
    { failureRedirect: "/users/signin" }
  ),
  usersController.createSession
);

module.exports = router;
