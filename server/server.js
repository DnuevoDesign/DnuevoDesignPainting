import express from "express"
import path from "path"

import { MailSender } from "./EmailManager/email-manager.js";
import { fileURLToPath } from 'url'; // Import this for working with paths in ES modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 80;



app.use(express.static(path.join(__dirname, '/client/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, "/Testing/contact-form/simple-contact.html"))
});



app.post("/simple-form", (req, res) => {
    let customerData = {
        name: req.body.customerName,
        email: req.body.customerEmail,
        message: req.body.customerMessage
    }

    const test = new MailSender(customerData);
    test.createEmailTemplate()
    test.sendMail();




    res.send("THANK YOU FOR YOUR SUPPORT!")
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})