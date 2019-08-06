const mongoose = require("mongoose")
const Schema = mongoose.Schema

const product = new Schema({
    productName: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    productIngredient: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    }
    // created: {
    //     type: Date,
    //     default: Date.now
    // }
})

let Product = mongoose.model("Product", product);

module.exports = Product