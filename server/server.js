const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const {checkUser} = require('./middlewares/authMiddleware')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()


// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


// database connectivitycls
// const dbURI = 'mongodb://localhost:27017/ffsd1'
const dbURI = process.env.dbURI

const port = process.env.PORT || 9999
mongoose.connect(dbURI)
        .then(app.listen(port,(err)=>{
                console.log(`http://localhost:${port}/`)
        }))
        .catch((err)=> console.log(err))



// routes

// app.get('*',checkUser)
// app.post('*',checkUser)
app.use(authRoutes)


