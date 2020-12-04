const express = require('express');
const app = express();
var mongoose = require('mongoose');
const cors = require("cors");
const password = require("./key");
// console.log(password);
mongoose.connect(`mongodb+srv://swap2001:${password}@cluster0.9mqjl.mongodb.net/news?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const path = require('path');
const fs = require('fs');

var contactSchema = new mongoose.Schema({
    name: String,
    inputEmail4: String,
    Number: String,
    inputCity: String,
    inputState: String,
});
var contact = mongoose.model('contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.use(cors());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    let params = {};
    res.status(200).render('index.pug', params);
});
app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("Your data has been successfully saved");
    }).catch(() => {
        res.status(404).send("Sorry, Your data couldn't be saved.Please, try again.");
    })
});
app.listen(process.env.PORT || 8000, () => {
    console.log("Server started successfully. please open the localhost.");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));