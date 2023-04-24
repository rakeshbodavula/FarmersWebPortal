const Message = require('../model/message')
const redisClient  = require('./redisClient')
const Redis = require('redis');

const key = 'all-messages';


module.exports.fetch_messages = async (req, res) => {
    let messages = [];
    let clients = await redisClient.get(key);
    if(!clients){
        console.log("Cache Miss");
        messages = await Message.find();
        await redisClient.set(key, JSON.stringify(messages));

    }else{
        // already there
        messages = clients;
        messages = JSON.parse(messages);    
        console.log("Cache Hit");
    }

    res.json(messages);

    // const messages = await Message.find({}).lean()
    // res.json(messages)
}


// Creates a message.
module.exports.send_messages = async (req, res) => {
    try {
        await redisClient.del(key);
        console.log('Deleting Messages');
        const message = await Message.create(req.body);
        res.json(message)
    } catch (error) {
        console.log(error)
    }
}