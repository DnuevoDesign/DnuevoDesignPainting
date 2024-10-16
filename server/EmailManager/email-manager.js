import nodemailer from "nodemailer";


const senderEmail = "dnuevomessenger@gmail.com";
const appPassword = "gqcp alql rbug mbhk";


const recipientEmail = ["Office@dnuevodesign.com", "dnuevodesign22@gmail.com", "nathan.ilescas@outlook.com"]


export class MailSender {
  constructor(userData) {
    this.userData = userData;  
    this.htmlTemplate;
  }


  /**
   * @requires String You need to first create a HTML template using createEmailTemplate() method
   */
  async sendMail() {
    const transporter = nodemailer.createTransport(
      {
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
          user: senderEmail,
          pass: appPassword
        }
      }
    );

    const mailDetails = {
      from: senderEmail,
      to: `${recipientEmail[0]}, ${recipientEmail[1]}, ${recipientEmail[2]}`,
      subject: "Customer Data",
      html: this.htmlTemplate
    }
    

    transporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        console.log("Error Occur: " , err)
      }
      else {
        console.log("Email sent successfully: ", data)
      }
    })

  }


  /**
   * @description This method creates an html template and saves it the a class variable
   */
  createEmailTemplate() {
    let htmlTemplate; 
    let name = this.userData.name;
    let email = this.userData.email;
    let message = this.userData.message;

    htmlTemplate = `
      <h1>User Information:</h1>
      <h2>Name: ${name}</h2>
      <h2>Email: ${email}</h2>
      <h2>message: ${message}</h2>
    `;

    this.htmlTemplate = htmlTemplate;
  }
}


