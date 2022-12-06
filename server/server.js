const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const {checkUser} = require('./middlewares/authMiddleware')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')

const app = express()


// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


// database connectivitycls
// const dbURI = 'mongodb://localhost:27017/ffsd1'
// const dbURI = 'mongodb+srv://fsd2:fsd2@project@cluster0.17k41mn.mongodb.net/test'
const dbURI = 'mongodb+srv://fsd2:fsd2%40project@cluster0.17k41mn.mongodb.net/?retryWrites=true&w=majority'
// const dbURI = process.env.dbURI

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


