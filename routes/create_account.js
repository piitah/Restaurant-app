const express = require("express")
const router = express.Router()
const Customer_account = require("../models/customer_account")

router.post("/", async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const address = req.body.address


        const create_acc = new Customer_account({
            username: username,
            email: email,
            password: password,
            address: address
        })

        create_acc.save(function (err, acc) {
            if (err) {
                return res.send({
                    status: false,
                    error: "This email is already in use"
                })
            } else {
                res.send({
                    status: true,
                    success: 'Account has been successfully created'
                })
            }
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            error: "error occured while trying to save data" + error
        })
    }
})

router.get("/", async (req, res) => {
    await customer_account.find().exec().populate('orders').then(result => {
        res.send(result)
    }).catch(err => {
        res.status(500).json({
            err: err
        })
    })
})

module.exports = router