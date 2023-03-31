const User = require('../model/user')
const Seller = require('../model/seller')
const bcrypt = require('bcryptjs')

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body
    try {
        const seller = await Seller.findOne({ email: email }).lean()
        if (seller) {
            const isAuth = await bcrypt.compare(password, seller.password)
            if (isAuth) {
                console.log('Seller Logged in')
                return res.json({ msg: "seller" })
            } else {
                console.log('Wrong Password')
                return res.json({ msg: "error" })
            }
        } else {
            const user = await User.findOne({ email: email }).lean()
            if (user) {
                const isAuth = await bcrypt.compare(password, user.password)
                if (isAuth) {
                    console.log('User Logged In')
                    return res.json({ msg: "user" })
                } else {
                    console.log('Wrong Password')
                    return res.json({ msg: 'error' })
                }
            } else {
                console.log('Invalid email or username')
                return res.json("error")
            }
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports.signup_post = async (req, res) => {
    const { email, name, password } = req.body
    let seller = await Seller.findOne({ email }).lean()
    if (seller) {
        console.log('Seller email Already registered')
        return res.json({ msg: "err" })
    }
    let user = await User.findOne({ email }).lean()

    if (user) {
        console.log('User Already registered')
        return res.json({ msg: "err" })
    }
    try {
        user = await User.create({ email, name, password })
        return res.json({ msg: '' })
    } catch (err) {
        console.log(err.message)
        return res.json({ msg: "err" })
    }
}