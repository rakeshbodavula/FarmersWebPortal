const Cart = require('../model/cart')
require('dotenv').config()



// Fetches all the items in the Cart Database and returns them
module.exports.Cart_get = async (req, res) => {
    const data = await Cart.find({}).lean()
    res.json(data)
}



// Creates a new item in the Cart.
module.exports.addToCart_post = async (req, res) => {
    const results = req.body;
    const tmp = await Cart.create({
        prod_id: results._id,
        name: results.name,
        quantity: 1,
        price: results.price,
        mrp: results.mrp,
        img: results.img1
    }).catch(err => console.log(err.message))
    res.json()
}



// Deletes an item in the Cart using the item id
module.exports.deleteItem_post = async (req, res) => {
    const { id } = req.body
    try {
        await Cart.findByIdAndDelete({ _id: id })
        result = await Cart.find({}).lean()
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}