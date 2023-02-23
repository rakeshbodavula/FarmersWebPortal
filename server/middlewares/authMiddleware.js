const jwt = require("jsonwebtoken");
const Seller = require("../model/seller");
const User = require('../model/user')
require('dotenv').config()
const JWT_Secret = process.env.JWT_Secret

const checkUser = (req,res,next)=>{
    let token = req.cookies.jwt_user
    if(token == undefined) token = req.cookies.jwt_seller

    if(token){
        jwt.verify(token,JWT_Secret,async (err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.locals.user = {username : 'Guest'}
                next()
            }else{
                let seller = await Seller.findOne({email : decodedToken.email}).lean()
                if(seller){
                    // seller.username = seller.username[0]
                    res.locals.user = seller
                    next()
                }else{
                    let user = await User.findOne({email : decodedToken.email})
                    // user.username = user.username[0]
                    res.locals.user=user
                    next()
                }
            }
        })
    }else{
        res.locals.user = {username: 'Guest'}
        next()
    }
}

// const checkUser = (req,res,next)=>{
//     let token = req.cookies.jwt_user
//     if(token == undefined) token = req.cookies.jwt_seller

//     if(token){
//         const result = jwt.verify(token,JWT_Secret)
//         if(err){
//             console.log(err)
//             res.locals.user = {username : 'Guest'}
//         }
//         if(result){
//             res.locals.user = {username : result.username}
//         }
//     }else{
//         res.locals.user = {username : 'Guest'}
//     }
// }

module.exports = { checkUser}