const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // two factor-auth,
  auth: {
    user: process.env.ROOT_USER_EMAIL, // your email, organisation email : nodemailertesting4@gmail.com
    pass: process.env.ROOT_USER_PASSWORD, // your email password
  },
});

// this is for mail template
let renderTemplate = (data, relativePath) => {
  let mailHTML;
  mailHTML = "<h1>Hi there!!!</h1>";
  return mailHTML;
};

module.exports = {
  transporter: transporter,
  renderTemplate: renderTemplate,
};
