const {Router} = require('express')
const viewController = require('../controllers/viewController')
const UserController = require('../controllers/UserController')
const cartController = require('../controllers/cartController')
const messageController = require('../controllers/messageController')

const router = Router()



// Authentication Routes
router.post('/login',UserController.login_post);
router.post('/signup',UserController.signup_post);


//Pages Routes
router.get('/Market',viewController.market_get);
router.post('/adminportal',viewController.adminportal_post);
router.get('/crops',viewController.getCrops_get);
router.get('/croppage/:id',viewController.croppage_id_get);
router.get('/productpage/:id',viewController.productpage_id_get);
router.post('/search',viewController.search_post);
router.post('/cropResults',viewController.cropResults_post);

// Cart Routes
router.get('/Cart/:email',cartController.Cart_get);
router.post('/addToCart',cartController.addToCart_post);
router.post('/delete-item',cartController.deleteItem_post);


// Message Routes
router.get('/fetchMessages',messageController.fetch_messages);
router.post('/sendMessages',messageController.send_messages);

module.exports = router;