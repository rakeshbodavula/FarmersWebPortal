const mongoose = require('mongoose')

const cart = new mongoose.Schema({
    prod_id: {type: String},
    user_id: {type: String},
    name : {type: String},
    quantity : {type: Number},
    price: {type: Number},
    mrp : {type : Number},
    img: {type: String}
},{collection: 'Cart'})

const Cart = mongoose.model('Cart',cart)

module.exports = Cart