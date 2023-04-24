const Seller = require('../model/seller')
const Product = require('../model/product')
const Crop = require('../model/crop')
const redisClient = require('./redisClient')




// module.exports.cropResults_post = async (req, res) => {
//     const data = await Crop.find({
//         soil: req.body.soilType,
//         season: req.body.season,
//         investment: { $lt: parseInt(req.body.investment) }
//     })  
//     res.render('cropResults', { data: data })
// }

module.exports.getCrops_get = async (req, res) => {
    const data = await Crop.find({}).lean()
    res.json(data)
}



module.exports.market_get = async (req, res) => {
    const results = await Product.find({}).lean()
    res.json(results)
}





module.exports.croppage_id_get = async (req, res) => {
    let cropDetails = {};
    const id = req.params.id;
    const key = `cropDetails - ${id}`;
    let clients = await redisClient.get(key);
    if (!clients) {
        console.log("Cache Miss");
        cropDetails = await Crop.findById(id);

        await redisClient.set(key , JSON.stringify(cropDetails));
    } else {
        // already there
        cropDetails = clients;
        cropDetails = JSON.parse(cropDetails);
        console.log("Cache Hit");
    }

    res.json(cropDetails);

}

module.exports.productpage_id_get = async (req, res) => {

    let productDetails = {};
    const id = req.params.id;
    const key = `productDetails - ${id}`;
    let clients = await redisClient.get(key);
    if (!clients) {
        console.log("Cache Miss");
        productDetails = await Product.findById(id);

        await redisClient.set(key , JSON.stringify(productDetails));
    } else {
        // already there
        productDetails = clients;
        productDetails = JSON.parse(productDetails);
        console.log("Cache Hit");
    }

    res.json(productDetails);
}


module.exports.search_post = async (req, res) => {
    let searchDetails = [];
    const query = req.body.query.toLowerCase().trim()
    const key = `searchDetails - ${query}`;
    let clients = await redisClient.get(key);
    if (!clients) {
        console.log("Cache Miss");
        let data = await Product.find({ name: { $regex: `${query}`, $options: 'i' } }).lean()
        if (!data.length > 0) {
            data = await Product.find({ category: { $regex: `${query}`, $options: 'i' } })
        }
        searchDetails = data;

        await redisClient.set(key , JSON.stringify(searchDetails));
    } else {
        // already there
        searchDetails = clients;
        searchDetails = JSON.parse(searchDetails);
        console.log("Cache Hit");
    }

    res.json(searchDetails);
    // const query = req.body.query.toLowerCase().trim()
    // try {
    //     let data = await Product.find({ name: { $regex: `${query}`, $options: 'i' } }).lean()
    //     if (!data.length > 0) {
    //         data = await Product.find({ category: { $regex: `${query}`, $options: 'i' } })
    //     }
    //     return res.json(data)
    // } catch (error) {
    //     console.log(error)
    // }
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