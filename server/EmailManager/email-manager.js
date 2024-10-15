const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
    service: "AOL",
    host: "smtp.aol.com",
    port: 587,
    secure: false, 
    auth: {
      user: "dnuevomessaging@aol.com",
      pass: "Dnuevo2009",
    },
  });

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "dnuevomessaging@aol.com", // sender address
      to: "nate.ilescas@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error);