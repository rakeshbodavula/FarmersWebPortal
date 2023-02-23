const Cart = require('../model/cart')
require('dotenv').config()
const JWT_Secret = process.env.JWT_Secret
const jwt = require('jsonwebtoken')


module.exports.Cart_get = async (req, res) => {
    // if (!req.cookies.jwt_user && !req.cookies.jwt_seller) {
    //     return res.redirect('/404')
    // }
    // let user;
    // if (req.cookies.jwt_user) {
    //     user = jwt.verify(req.cookies.jwt_user, JWT_Secret)
    // } else {
    //     user = jwt.verify(req.cookies.jwt_seller, JWT_Secret)
    // }
    // const data = await Cart.find({ user_id: user.id }).lean()
    const data = await Cart.find({}).lean()
    res.json(data)
    // res.render('cart', { data })
}



module.exports.addToCart_post = async (req, res) => {
    // let user;
    // if (req.cookies.jwt_user) {
    //     user = jwt.verify(req.cookies.jwt_user, JWT_Secret)
    // } else {
    //     user = jwt.verify(req.cookies.jwt_seller, JWT_Secret)
    // }

    const results = req.body;
    // console.log(results)
    // const it =await Cart.findOne({
    //     $and: [
    //         // { user_id: user.id },
    //         { prod_id: results.productId }
    //     ]
    // })
    // if (it) {
    //     return res.redirect('/Market');
    // }
    // console.log(req.body)
    const tmp = await Cart.create({
        prod_id: results._id,
        // user_id: user.id,
        name: results.name,
        quantity: 1,
        price: results.price,
        mrp: results.mrp,
        img: results.img1
    }).catch(err => console.log(err.message))

    // console.log(tmp)
    res.json()
    // res.redirect('/Market#product')
    // const data = await Cart.find({}).lean()
    // res.render('Cart',{data})
}




module.exports.deleteItem_post = async (req, res) => {
    const {id} = req.body
    // console.log(id)
    // let user;
    // if (req.cookies.jwt_user) {
    //     user = jwt.verify(req.cookies.jwt_user, JWT_Secret)
    // } else {
    //     user = jwt.verify(req.cookies.jwt_seller, JWT_Secret)
    // }
    try {
        await Cart.findByIdAndDelete({_id: id})
        result = await Cart.find({}).lean()
        res.json(result)
        // await Cart.findOneAndDelete({ _id: id, user_id: user.id })
        // res.redirect('/Cart')
    } catch (error) {
        console.log(error)
    }
}