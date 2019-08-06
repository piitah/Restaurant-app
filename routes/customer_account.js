const express = require("express")
const router = express.Router()
const customer_account = require("../models/customer_account.js")
const jwt = require('jsonwebtoken')

// jwt
function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, "123456", {
        expiresIn: ONE_WEEK
    });
}

router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
console.log(email, password)
    var user = await customer_account.where({ email: email }).findOne(function (err, user) {
        if (err) {
            return res.send({
                msg: "user does not exist"
            })
        }
        if (user) {
            try {
                const isPasswordValid = password === user.password
                if (!isPasswordValid) {
                    return res.status(600).send({
                        status: false,
                        error: 'Incorrect password'
                    })
                }
                const userJson = user.toJSON();
                res.send({
                    status: true,
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            } catch (err) {
                res.status(400).send({
                    status: false,
                    error: `error occured trying to login` + err
                })
            }
        } else {
            res.status(500).send({
                status: false,
                error: 'user doesnt exist'
            })
        }
    })
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