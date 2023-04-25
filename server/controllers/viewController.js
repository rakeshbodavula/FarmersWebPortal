const Seller = require('../model/seller')
const Product = require('../model/product')
const Crop = require('../model/crop')
const redisClient = require('./redisClient')
const solr = require('solr-client');
const ProductClient = solr.createClient({ host: 'localhost', port: 8983, core: 'product', protocol: 'http' });




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

        await redisClient.set(key, JSON.stringify(cropDetails));
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

        await redisClient.set(key, JSON.stringify(productDetails));
    } else {
        // already there
        productDetails = clients;
        productDetails = JSON.parse(productDetails);
        console.log("Cache Hit");
    }

    res.json(productDetails);
}


// module.exports.search_post = async (req, res) => {
//     let searchDetails = [];
//     const value = req.body.query.toLowerCase().trim()
//     const key = `searchDetails - ${value}`;
//     let clients = await redisClient.get(key);
//     if (!clients) {
//         console.log("Cache Miss");
//         try {
//             let query = ProductClient.query()
//                 .q(`name:*${value}* OR category:*${value}*`)
//                 .start(0)
//                 .rows(100)
//             // console.log(query)
//             ProductClient.search(query)
//                 .then(function (result) {
//                     console.log('Response:', result.response.docs.length);
//                     // return res.json({ data: result.response.docs })
//                     let data = result.response.docs;
//                 })
//                 .catch(function (err) {
//                     console.error(err);
//                 });


//         } catch (error) {
//             console.log("Error", error)
//         }
//         searchDetails = data;

//         await redisClient.set(key, JSON.stringify(searchDetails));
//     } else {
//         searchDetails = clients;
//         searchDetails = JSON.parse(searchDetails);
//         console.log("Cache Hit");
//     }
//     res.json({ searchDetails });
// }
module.exports.search_post = async (req, res) => {
    const value = req.body.query.toLowerCase().trim()
    try {
        let query = ProductClient.query()
            .q(`name:*${value}* OR category:*${value}*`)
            .start(0)
            .rows(100)
        // console.log(query)
        ProductClient.search(query)
            .then(function (result) {
                console.log('Response:', result.response.docs.length);
                return res.json({ data: result.response.docs })
            })
            .catch(function (err) {
                console.error(err);
            });


    } catch (error) {
        console.log("Error", error)
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