const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  let token;
  console.log("@auth middleware");
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("here");
    console.log(token);
  }
  console.log("==>", token, req.headers.authorization);
  if (!token) {
    return res.status(200).json({
      success: false,
      message: "A auth token is required to access",
    });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    console.log("reached at end", decoded);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
