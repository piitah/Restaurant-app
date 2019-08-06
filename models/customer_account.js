const mongoose = require("mongoose");
const Schema = mongoose.Schema

const customer = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    orders: {
        type: Schema.Types.ObjectId,
        ref: 'Orders'
    }
})

let Customer = mongoose.model("Customer", customer)

module.exports = Customer;