const redis = require('redis');


const redisClient = redis.createClient({
    password: '3PUq3PUqY8oh3BQAWm9RVBaVlBvBBPAD',
    socket: {
        host: 'redis-15493.c264.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 15493
    }
});

redisClient.connect()
redisClient.on('connect', function() {
    console.log('Redis client connected');
});
redisClient.on('error', function (err) {
    console.log('Error: ' + err);
});
module.exports = redisClient;