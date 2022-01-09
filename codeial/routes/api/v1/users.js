const express = require("express");
const passport = require("passport");
const router = express.Router();
const usersApi = require("../../../controllers/api/v1/users_api");

//  /api/v1/
router.get("/", usersApi.index);
router.post(
  "/create-session",
  passport.authenticate("jwt", { session: false }),
  usersApi.createSession
);

module.exports = router;

// here you need to send the Authorization Bearer token in the request from the frontend to
// backend to authenticate the user
// postman -- > request --> Header --> Authorization : Bearer token_generated for user
