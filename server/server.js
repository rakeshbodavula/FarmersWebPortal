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
const swaggerUI =  require('swagger-ui-express')
const swaggerJsDoc = require("swagger-jsdoc")
const app = express()





let accessLogStream = rfs.createStream('access.log',{
        interval : '1d', // 1 day
        path:path.join(__dirname,"Logs")
})



// middleware
app.use(morgan('combined',{stream:accessLogStream}))
app.use(express.urlencoded({extended : true})) // Built-in middleware
app.use(express.json()) // Built-in middleware
app.use(bodyParser.json()) // Third Party middleware
app.use(cors())
app.use(helmet())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// database connectivity

const dbURI = process.env.dbURI

const port = process.env.PORT || 9999
mongoose.connect(dbURI)
        .then(app.listen(port,(err)=>{
                console.log(`http://localhost:${port}/`)
        }))
        .catch((err)=> console.log(err))


//swagger
const options = {
        definition: {
                openapi : "3.0.0",
                info:{
                title: "Farmers Web Portal API's",
                version: "2.0.0",
                description: "All API's"
                },
                servers:[
                        { 
                                url:"http://localhost:9999"
                        }
                ],
        },
        apis: ["./routes/*.js"]
}
const specs = swaggerJsDoc(options)
// routes
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(specs))

app.use(authRoutes)