const express = require("express");
const path = require("path");

const SendData  = require("./EmailManager/email-manager.js")

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

    console.log(`${customerData.name}  ${customerData.email}  ${customerData.message}`)


    const emailSender = new SendData(customerData.name, customerData.email, customerData.message);
    emailSender.main()
    res.send("THANK YOU FOR YOUR SUPPORT!")
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})