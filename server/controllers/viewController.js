const jwt = require('jsonwebtoken')
const Seller = require('../model/seller')
const Product = require('../model/product')
const Crop = require('../model/crop')
const mongodb = require('mongodb')
const ObjectID = mongodb.ObjectId
require('dotenv').config()
const JWT_Secret = process.env.JWT_Secret





module.exports.home_get = (req, res) => {
    res.render('index')
}

module.exports.about_get = (req, res) => {
    res.render('Aboutuss')
}

module.exports.cropsuggestion_get = (req, res) => {
    res.render('CropSuggestion')
}

module.exports.cropResults_post = async (req, res) => {
    const data = await Crop.find({
        soil: req.body.soilType,
        season: req.body.season,
        investment: { $lt: parseInt(req.body.investment) }
    })
    res.render('cropResults', { data: data })
}

module.exports.getCrops_get = async (req,res)=>{
    const data = await Crop.find({}).lean()
    // console.log(data)
    res.json(data)
}

module.exports.discussions_get = (req, res) => {
    if (!req.cookies.jwt_user && !req.cookies.jwt_seller) return res.redirect('/404')
    res.render('discussions')
}

module.exports.chatbot_get = (req, res) => {
    if (!req.cookies.jwt_user && !req.cookies.jwt_seller) return res.redirect('/404')
    res.render('ChatBot')
}

module.exports.market_get = async (req, res) => {
    // if (!req.cookies.jwt_user && !req.cookies.jwt_seller) return res.redirect('/404')
    const results = await Product.find({}).lean()
    // const results = await Product.aggregate([{$sample : {size: 8}}]) // render 7 items randomly
    res.json(results)
    // res.render('Market', { data: results })
}



module.exports.checkoutpage_get = (req, res) => {
    res.render('checkoutpage')
}

module.exports.adminportal_post = async (req, res) => {
    // if (req.cookies.jwt_seller) {
        // let seller = { username: "" }
        // result = jwt.verify(req.cookies.jwt_seller, JWT_Secret)
        // seller = await Seller.findOne({username : result.username})
        // console.log(req.body)
        const seller = await Seller.findOne({ email:req.body.email }).lean()
        if(!seller){
            // return res.redirect('/404');
            return res.json({msg:'err'})
        }
        const products = await Product.find({sellerId : seller._id}).lean()
        const seeds = products.filter(prod => prod.category === 'seeds').length
        const fertilizers = products.filter(prod => prod.category === 'fertilizers').length
        const pesticides = products.filter(prod => prod.category === 'pesticides').length
        const total = seeds+fertilizers+pesticides
        const data = {seeds,fertilizers,pesticides,total}
        // return res.render('AdminPortal', { data,seller,products})
        return res.json({data,products})
    // }
    // res.redirect('/404')
}


module.exports.dashboard_get = (req, res) => {
    if (req.cookies.jwt_user) return res.render('dashboard')
    res.redirect('/404')
}


module.exports.error_get = (req, res) => {
    // if(!req.cookies.jwt_user && !req.cookies.jwt_seller){
    //     return res.redirect('/')
    // }
    res.render('404')
}



module.exports.forgotPassword_get = (req, res) => {

}


module.exports.croppage_id_get = (req, res) => {
    const id = req.params.id;
    Crop.findById(id)
        .then(result => {
            // res.render('croppage', { crop: result })
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.productpage_id_get = (req, res) => {
    const id = req.params.id
    if(!id){
        return res.redirect('/Market')
    }
    Product.findById(id)
        .then(result => {
            res.json(result)
            // res.render('productpage', {title: result.name, data: result })
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports.search_get = async (req, res) => {
    const query = req.params.string.toLowerCase().trim()
    try {
        // const results = await Product.find({}).lean()
        // let data = results.filter(prod => prod.category.toLowerCase() === query)
        // let data = await Product.find({name: /seeds/i})
        let data = await Product.find({name: {$regex : `${query}` ,$options : 'i'}}).lean()
        if(!data.length>0){
            data = await Product.find({category : {$regex : `${query}`,$options : 'i'}})
            // data = results.filter(prod => prod.name.toLowerCase().includes(query))
        }
        res.render('searchResults', { data })
    } catch (error) {
        console.log(error)
        res.redirect('/Market#category')
    }
}



module.exports.search_post = async (req, res) => {
    const query = req.body.query.toLowerCase()
    if(query){
        res.redirect(`/search/${query}`)
    }else{
        res.redirect('/Market')
    }
}



// export default JWT_Secret


