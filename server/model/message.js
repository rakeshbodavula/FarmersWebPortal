const mongoose = require('mongoose')

const message = mongoose.Schema({
    msg_id: { type: String, required: true },
    referedTo: { type: String },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        // type : Date,
        type: String,
        required: true
    }
}, { collection: 'Message' })

const Message = mongoose.model('Message', message)

module.exports = Message;