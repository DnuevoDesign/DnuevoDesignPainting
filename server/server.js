import express from "express"
import path from "path"

import { fileURLToPath } from 'url'; // Import this for working with paths in ES modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 80;



app.use(express.static(path.join(__dirname, '/client/public')));
app.use(express.urlencoded({ extended: true }));


app.post('/contact-information', (req, res) => {
    console.log(req.body)
});

app.get('/', (req, res) => {
    console.log("Someone came in.")
    
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})