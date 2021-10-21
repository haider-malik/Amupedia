const express = require('express');
const connectToMongo = require('./db');
const path = require("path");
const Form = require('./models/Form');
const bodyParser = require("body-parser");

connectToMongo();

const port = 80;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Home/home.html'));
})

app.post('/', async (req, res) => {
  let form = await Form.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    message: req.body.message,
  });
  console.log(form);
  form.save();
  res.sendFile(path.join(__dirname, '../Home/home.html'));
})


app.listen(port, () => {
  console.log(`App listening on http://localhost:80`);
})