const queue = require("../config/kue");

const signupMailer = require("../mailers/signup_mailer");

queue.process("signupMails", (job, done) => {
  // job is the data which we need to send to signUpMailer
  console.log("using signup worker --> redis working");
  signupMailer.newSignUp();
  done();
});
