const nodeMailer = require("../config/nodemailer");
require("dotenv").config();

// this is another way to export function
exports.newSignUp = (comment) => {
  console.log("here at commentMailer");

  nodeMailer.transporter.sendMail(
    {
      from: process.env.DUMMY_USER_EMAIL_FROM, // sender mail
      to: process.env.DUMMY_USER_EMAIL_TO, // receiver mail
      subject: "New comment published",
      html: "<h1 style='background-color:red; color:white'>Arey Bhai Farzi Email hai <p style='text-align:center; margin-top:100px;background-color:yellow;color:black; height:400px;'> Testing mail </p> <br/> <p>reply karde agar padh liya hai mail toh</p></h1>",
    },
    (err, info) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("successfully delivered");
      console.log(info);
    }
  );
};
