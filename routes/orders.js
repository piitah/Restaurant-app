const express = require("express")
const router = express.Router()
const Orders = require("../models/order.js")
const customer_account = require("../models/customer_account.js")

router.post("/", async (req, res) => {
    const userId = req.body.userId;
    const address = req.body.address;
    const contact = req.body.number;
    const name = req.body.name
    const items = req.body.orders.items

    const Order = new Orders({
        userKey: userId,
        deliveryAddress: address,
        contact: contact,
        orders: items,
        name: name
    })
    console.log(Order)

    Order.save(function (err, order) {
        if (err) throw err;
        if (order) {
            res.send({
                status: true,
                success: 'Order has been successfully created'
            })
        }
    })
})

router.get("/", async (req, res) => {
    const orders = await Orders.find({})
    res.send({
        orders: orders
    })
})

module.exports = router

