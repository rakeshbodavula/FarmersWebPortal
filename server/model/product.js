const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    // _id: {type: Number},
    category: {type: String, required: true},
    name: {type: String, required: true},
    mrp: {type: Number, required: true},
    price: {type: Number, required: true},
    sellerId: {type: String, required: true},
    manufacturer: {type: String, required: true},
    weight: {type: Number, required: true},
    stock: {type: Boolean, required: true},
    img1: {type: String},
    img2: {type: String},
    description: {type: String},
    // expiry: {type: Date}
    expiry: {type: String}
    },
    { collection: 'products'}
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product



// Product.create({
//     category : 'fertilizers',
//     name : 'cotton',
//     mrp : 2500,
//     price : 1000,
//     sellerId : 1,
//     manufacturer: 'rakesh',
//     weight : 5,
//     stock : true,
//     img1 : '/Images/corn.jpg',
//     description : 'this is cotton corn crop',
//     expiry : 'dec 2025'
// }).then(console.log('created')).catch((err)=>console.log(err))

