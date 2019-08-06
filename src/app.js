const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

// import all routes: 
const create_account = require("../routes/create_account")
const customer_account = require("../routes/customer_account")
const product = require("../routes/product")
const order = require("../routes/orders")

// initialize app
const app = express()

// use various package
// app.use(express.static(path.join(__dirname, "../dist")));
app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
})

// use the routes
app.use("/register", create_account)
app.use("/login", customer_account)
app.use("/product", product)
app.use("/Order", order)


// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../dist", "index.html"));
// })
// setting up mongoose connection git stau
var mongoDB = 'mongodb://127.0.0.1/restuarant'
// var mongoDB = 'mongodb + srv://Peter:jesuschrist200%24@cluster0-ykkep.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB)

// get mongoose to use the globar promise library
mongoose.promise = global.promise;

// create a connection 
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoDB connection error'));
db.once('open', function () {
    console.log('connected to mogndb')
});

app.listen(process.env.PORT || 8182, function () {
    console.log('linstening to port 8182');
})