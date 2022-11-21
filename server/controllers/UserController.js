const jwt = require('jsonwebtoken')
const User = require('../model/user')
const Seller = require('../model/seller')
const bcrypt = require('bcryptjs')
// import JWT_Secret from './viewController'
require('dotenv').config()
// const JWT_Secret = process.env.JWT_Secret
const JWT_Secret = 'FSD2'

const maxAge = 60 * 60 * 1000

const createToken = (id, email) => {
    return jwt.sign({ id: id, email: email }, JWT_Secret, { expiresIn: maxAge })
}

module.exports.login_get = async (req, res) => {
    // const seller = await Seller.find({})
    // console.log(seller)
    if (req.cookies.jwt_seller) return res.redirect('/AdminPortal')
    if (req.cookies.jwt_user) return res.redirect('/dashboard')
    res.render('Login')
}

module.exports.signup_get = (req, res) => {
    if (req.cookies.jwt_user) return res.redirect('/dashboard')
    res.render('signup')
}

module.exports.logout_get = (req, res) => {
    if (req.cookies.jwt_user) {
        res.cookie('jwt_user', '', { maxAge: 1 })
    }
    else if (req.cookies.jwt_seller) {
        res.cookie('jwt_seller', '', { maxAge: 1 })
    }
    // res.redirect('/login')
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body
    try {
        // const seller = await Seller.findOne({ $or: [{ email: email }, { username: email }] }).lean()
        const seller = await Seller.findOne({ email: email }).lean()
        if (seller) {
            const isAuth = await bcrypt.compare(password, seller.password)
            if (isAuth) {
                console.log('Seller Logged in')
                const token = createToken(seller._id, seller.email)
                res.cookie('jwt_seller', token, { maxAge: maxAge, httpOnly: true })
                return res.json({ msg: "seller" })
                // return res.redirect('/AdminPortal')
            } else {
                console.log('Wrong Password')
                return res.json({ msg: "error" })
                // return res.redirect('/login')
            }
        } else {

            // const user = await User.findOne({ $or: [{ email: email }, { username: email }] }).lean()
            const user = await User.findOne({ email: email }).lean()
            if (user) {
                const isAuth = await bcrypt.compare(password, user.password)
                if (isAuth) {
                    console.log('User Logged In')
                    const token = createToken(user._id, user.email)
                    res.cookie('jwt_user', token, { maxAge: maxAge, httpOnly: true })
                    return res.json({ msg: "user" })
                    // return res.redirect('/dashboard')
                } else {
                    console.log('Wrong Password')
                    return res.json({ msg: 'error' })
                    // return res.redirect('/login')
                }
            } else {
                console.log('Invalid email or username')
                return res.json("error")
                // return res.redirect('/login')
            }
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports.signup_post = async (req, res) => {
    const { email, name, password } = req.body
    // console.log("Req.body",req.body)
    // const seller = await Seller.find({$or : [ {email : email}, {username : username}]})
    let seller = await Seller.findOne({ email }).lean()
    if (seller) {
        console.log('Seller email Already registered')
        return res.json({ msg: "err" })
        // return res.redirect('/signup')
    }
    // else{
    //     seller = await Seller.findOne({username}).lean()
    //     if(seller){
    //         console.log("Seller Username already registered")
    //         return res.redirect('/signup')
    //     }

    // let user = await User.findOne({ $or: [{ email: email }, { username: email }] }).lean()
    let user = await User.findOne({ email }).lean()
    // if(!user){
    //     user = await User.findOne({username}).lean()
    // }

    if (user) {
        console.log('User Already registered')
        return res.json({ msg: "err" })
        // return res.redirect('/signup')
    }
    try {
        // const salt = await bcrypt.genSalt()
        // const hashPassword = await bcrypt.hash(password,salt)
        // const hashPassword = await bcrypt.hash(password, 12)
        // user = await User.create({ username, email, name, password: hashPassword })
        user = await User.create({ email, name, password })
        // console.log(user)
        const token = createToken(user._id, user.email)
        res.cookie('jwt_user', token, { maxAge: maxAge, httpOnly: true })
        return res.json({msg : ''})
        // res.redirect('/dashboard')
    } catch (err) {
        console.log(err.message)
        return res.json({ msg: "err" })
        // return res.redirect('/signup')
    }
}



// module.exports.enter_data = async (req,res)=>{
//     const {email,username,name,password,products} = req.body
//     const hashPassword = await bcrypt.hash(password,12)
//     const seller = await Seller.create({email,username,name,password: hashPassword,products})
//     console.log(seller)
// }

