const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const dotenv = require('dotenv')
const helmet = require("helmet")
const morgan = require("morgan")
const path = require("path")
const rfs = require("rotating-file-stream")
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require("swagger-jsdoc")
const app = express()
const solr = require('solr-client');
// const ProductClient = solr.createClient({ host: 'localhost', port: 8983, core: 'product' });
// const CropClient = solr.createClient({ host: 'localhost', port: 8983, core: 'crop' });





let accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // 1 day
        path: path.join(__dirname, "Logs")
})



// middleware
app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.urlencoded({ extended: true })) // Built-in middleware
app.use(express.json()) // Built-in middleware
app.use(bodyParser.json()) // Third Party middleware
app.use(cors())
app.use(helmet())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// database connectivity
//and solr optimization search
const dbURI = process.env.dbURI
const port = process.env.PORT || 9999;
mongoose.connect(dbURI)
        .then(app.listen(port, (err) => {
                console.log(`http://localhost:${port}/`)
                console.log('Connected to MongoDB');
                //         Crop.find({}, (err, crops) => {
                //                 if (err) {
                //                         console.log(err);
                //                         return;
                //                 }
                //                 const docs = crops.map(crop => ({
                //                         id: crop._id,
                //                         name: crop.name,
                //                         soil: crop.soil,
                //                         season: crop.season,
                //                         investment: crop.investment,
                //                         waterReq: crop.waterReq,
                //                         profit: crop.profit,
                //                         brief: crop.brief,
                //                         info: crop.info,
                //                         img: crop.img
                //                 }));
                //                 CropClient.add(docs, (err, response) => {
                //                         if (err) {
                //                                 console.log('Error while adding docs:', err);
                //                         } else {
                //                                 console.log('Added docs:', response);
                //                         }
                //                 });
                //         });

                //         Product.find({}, (err, products) => {
                //                 if (err) {
                //                         console.log(err);
                //                         return;
                //                 }
                //                 let productDocs = products.map(prod => ({
                //                         _id: prod._id,
                //                         category: prod.category,
                //                         name: prod.name,
                //                         mrp: prod.mrp,
                //                         price: prod.price,
                //                         sellerId: prod.sellerId,
                //                         manufacturer: prod.manufacturer,
                //                         weight: prod.weight,
                //                         stock: prod.stock,
                //                         img1: prod.img1,
                //                         img2: prod.img2,
                //                         description: prod.description,
                //                         expiry: prod.expiry
                //                 }))
                //                 ProductClient.add(products, (err, response) => {
                //                         if (err) {
                //                                 console.log('Error while adding docs:', err);
                //                         } else {
                //                                 console.log('Added docs:', response);
                //                         }
                //                 })
                //         })
        }))
        .catch((err) => console.log(err))




//swagger
const options = {
        definition: {
                openapi: "3.0.0",
                info: {
                        title: "Farmers Web Portal API's",
                        version: "2.0.0",
                        description: "All API's"
                },
                servers: [
                        {
                                url: "http://localhost:9999"
                        }
                ],
        },
        apis: ["./routes/*.js"]
}
const specs = swaggerJsDoc(options)
// routes

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use(authRoutes)

module.exports = app