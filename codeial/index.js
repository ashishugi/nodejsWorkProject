const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8000; // by default runs at port : 80

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // for post request
app.use(cookieParser());

app.use("/", require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`server is running on port ${PORT}`);
});
