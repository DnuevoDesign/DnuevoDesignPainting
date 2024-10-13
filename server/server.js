const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, '/client/public')))

app.get('/', (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, "/client/pages/home/index.html"))
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})