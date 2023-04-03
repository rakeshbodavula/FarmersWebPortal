const User = require('../model/user')
const Seller = require('../model/seller')
const fs = require('fs')
require('dotenv').config()

const multer = require('multer')
var path = require('path')

var curr_file_path = ""

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log("    MULTER DISK STORAGE    ")
        console.log(req.params.email)

        /*Appending extension with original name*/
        curr_file_path = Date.now() + '-' + Math.round(Math.random() * 10000) + path.extname(file.originalname)
        cb(null, curr_file_path)
    }
})

const upload = multer({ storage: storage }).single("image")

module.exports.ProfilePicUpload_post = async (req, res) => {
    let user = await User.findOne({ email: req.params.email }).lean()
    if (!user) {
        user = await Seller.findOne({ email: req.params.email }).lean()
    }

    // code to check the user's updated profile pic
    // console.log(user)
    // return

    // req.user_id = user._id
    // var no_error = false
    req.no_error = false
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err)
        } else if (err) {
            console.log(err)
        } else {
            // PROBLEM is STUCK here..... cannot use no_error variable to know the error status..
            // console.log(no_error)
            // no_error = true
            // req.no_error = true
            const updateUserDetails = async () => {
                let final_file_name = curr_file_path
                let user = await User.findOne({ email: req.params.email }).lean();
                if (!user) {
                    user = await Seller.findOne({ email: req.params.email }).lean()
                }
                const oldFileName = `uploads/${user.profilepic}`;
                console.log(oldFileName)

                if (fs.existsSync(oldFileName)) {
                    fs.unlinkSync(oldFileName)
                }


                await User.updateOne({ email: req.params.email }, { profilepic: final_file_name }, function (err, docs) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("updated docs: ", docs)
                    }
                }).clone().catch(function (err) { console.log(err) })

                await Seller.updateOne({ email: req.params.email }, { profilepic: final_file_name }, function (err, docs) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("updated docs: ", docs)
                    }
                }).clone().catch(function (err) { console.log(err) })
            }
            updateUserDetails()
            res.json({ ext: path.extname(req.file.originalname) })
        }
        // path.extname(file.originalname)
    })
    // console.log(no_error)
    // no_error = true

    // if (no_error){
    //     // let final_file_name = req.user_id + path.extname(req.file.originalname)
    //     let final_file_name = req.file_name
    //     console.log(req.file_name, req.no_error)
    //     console.log(final_file_name)
    //     await User.updateOne({ email: req.params.email }, {profilepic: final_file_name}, function(err, docs){
    //         if (err){
    //             console.log(err)
    //         } else {
    //             console.log("updated docs: ", docs)
    //         }
    //     }).clone().catch(function(err){ console.log(err)})
    // }
}


module.exports.getImageName = async (req, res) => {
    try {
        const email = req.params.email
        let user = await User.findOne({ email }).lean()
        if (!user) {
            user = await Seller.findOne({ email }).lean();
        }
        return res.json({ url: user.profilepic })
    } catch (error) {
        console.log(error);
        return res.status(400).send(error)
    }
}