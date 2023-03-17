const mongoose = require('mongoose')

const cart = new mongoose.Schema({  
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[
        {
            prod_id:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },
            name:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            mrp:{
                type:Number,
                required:true
            },
            img:{
                type:String,
                required:true
            }
        }
    ]
},{collection: 'Cart'})

const Cart = mongoose.model('Cart',cart)

module.exports = Cart