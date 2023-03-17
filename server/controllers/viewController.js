const Seller = require('../model/seller')
const Product = require('../model/product')
const Crop = require('../model/crop')





module.exports.cropResults_post = async (req, res) => {
    const data = await Crop.find({
        soil: req.body.soilType,
        season: req.body.season,
        investment: { $lt: parseInt(req.body.investment) }
    })
    res.render('cropResults', { data: data })
}

module.exports.getCrops_get = async (req, res) => {
    const data = await Crop.find({}).lean()
    res.json(data)
}



module.exports.market_get = async (req, res) => {
    const results = await Product.find({}).lean()
    res.json(results)
}





module.exports.croppage_id_get = (req, res) => {
    const id = req.params.id;
    Crop.findById(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.productpage_id_get = (req, res) => {
    const id = req.params.id
    Product.findById(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports.search_post = async (req, res) => {
    const query = req.body.query.toLowerCase().trim()
    try {
        let data = await Product.find({ name: { $regex: `${query}`, $options: 'i' } }).lean()
        if (!data.length > 0) {
            data = await Product.find({ category: { $regex: `${query}`, $options: 'i' } })
        }
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
}



module.exports.adminportal_post = async (req, res) => {
    const seller = await Seller.findOne({ email: req.body.email }).lean()
    if (!seller) {
        return res.json({ msg: 'err' })
    }
    const products = await Product.find({ sellerId: seller._id }).lean()
    const seeds = products.filter(prod => prod.category === 'seeds').length
    const fertilizers = products.filter(prod => prod.category === 'fertilizers').length
    const pesticides = products.filter(prod => prod.category === 'pesticides').length
    const total = seeds + fertilizers + pesticides
    const data = { seeds, fertilizers, pesticides, total }
    return res.json({ data, products })
}