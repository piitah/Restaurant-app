const express = require("express");
const router = express.Router();
const Product = require("../models/products.js")
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
}).single('file')

router.post("/", async (req, res) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                return res.send('no file uploaded')
            }

            // file info
            const productName = req.body.productName
            const productImg = req.body.productImg
            const productPrice = req.body.productPrice
            const productIngredient = req.body.productIngredient

            const product = new Product({
                productName: productName,
                productImg: productImg,
                productPrice: productPrice,
                productIngredient: productIngredient
            })

            product.save(function (err, product) {
                if (err) {
                    res.status(500).send({
                        error: 'unable to save' + err
                    })
                } else {
                    res.send({
                        status: true,
                        product: product,
                        success: "product added successfully"
                    })
                }
            })
        })
    } catch (error) {
        res.status(500).send({
            error: `error occured saving the product ${error}`
        })
    }
})

router.get("/", async (req, res) => {
    const product = await Product.find({})
    res.send(product)
})

router.delete("/:id", async (req, res) => {
    const productId = req.params.id
    const deleteProduct = await Product.findByIdAndDelete({ _id: productId }, function (err, result) {
        if (err) throw err;
        res.send("success")
    })

})
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.send(product)
})

router.put("/", async (req, res) => {
    const editProduct = await Product.findByIdAndUpdate({ _id: req.body.id }, req.body, { new: true }, function (err, result) {
        if (err) throw err;
        res.send({
            status: true,
            message: "update successful"
        })
    })
})
module.exports = router