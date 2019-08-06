const mongoose = require("mongoose");
const Schema = mongoose.Schema

const customer = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let Customer = mongoose.model("Customer", customer)

// module.exports = Customer;