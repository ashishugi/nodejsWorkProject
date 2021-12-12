const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

const db = require("./config/mongoose");

//used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

//cors error
const cors = require("cors");

const bodyParser = require("body-parser");

const PORT = 8000; // by default runs at port : 80

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true })); // for post request
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  session({
    name: "codeial",
    // change secret before deployement
    secret: "some secret key to be kept here",
    saveUninitialized: false,
    resave: false,
    cookie: {
      //expiry
      maxAge: 1000 * 60 * 100,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`server is running on port ${PORT}`);
});
