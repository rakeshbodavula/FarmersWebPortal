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


// database connectivity

const dbURI = process.env.dbURI

const port = process.env.PORT || 9999
mongoose.connect(dbURI)
        .then(app.listen(port,(err)=>{
                console.log(`http://localhost:${port}/`)
        }))
        .catch((err)=> console.log(err))



// routes

app.use(authRoutes)