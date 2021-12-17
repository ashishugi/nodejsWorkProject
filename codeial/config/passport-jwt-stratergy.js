const passport = require("passport");
const JWTStratergy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
// we will be userModel for authentication
