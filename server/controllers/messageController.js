const Message = require('../model/message')


// Fetches all the messages from the Database.
module.exports.fetch_messages = async (req, res) => {
    const messages = await Message.find({}).lean()
    res.json(messages)
}


// Creates a message.
module.exports.send_messages = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.json(message)
    } catch (error) {
        console.log(error)
    }
}