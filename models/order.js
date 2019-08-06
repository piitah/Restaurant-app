const mongoose = require("mongoose")
const Schema = mongoose.Schema

const order = new Schema({
    userKey: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    orders: {
        type: Object,
        required: true
    },
    dispatch: {
        type: Boolean, default: true
    },
    status: {
        type: String, default: "DISPATCH"
    },
    deliveryAddress: String,
    contact: Number,
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let Orders = mongoose.model("Orders", order)

module.exports = Orders