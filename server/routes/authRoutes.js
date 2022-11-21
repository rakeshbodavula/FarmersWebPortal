const {Router} = require('express')
const viewController = require('../controllers/viewController')
const UserController = require('../controllers/UserController')
const cartController = require('../controllers/cartController')

const router = Router()



// Authentication Routes
router.get('/login',UserController.login_get)
router.get('/signup',UserController.signup_get);
router.get('/logout',UserController.logout_get);
router.post('/login',UserController.login_post);
router.post('/signup',UserController.signup_post);


//Pages Routes
router.get('/',viewController.home_get)
router.get('/404',viewController.error_get)
router.get('/Aboutuss',viewController.about_get)
router.get('/CropSuggestion',viewController.cropsuggestion_get)
router.get('/discussions',viewController.discussions_get)
router.get('/ChatBot',viewController.chatbot_get)
router.get('/Market',viewController.market_get)
router.get('/checkoutpage',viewController.checkoutpage_get)
// router.get('/adminportal',viewController.adminportal_get)
router.post('/adminportal',viewController.adminportal_post)
router.get('/dashboard',viewController.dashboard_get)
router.get('/Cart',cartController.Cart_get)
router.get('/forgotPassword',viewController.forgotPassword_get)
router.get('/search/:string',viewController.search_get)
router.get('/crops',viewController.getCrops_get)

router.get('/croppage/:id',viewController.croppage_id_get)
router.get('/productpage/:id',viewController.productpage_id_get)

router.post('/search',viewController.search_post)
router.post('/addToCart',cartController.addToCart_post)
router.post('/delete-item',cartController.deleteItem_post)
router.post('/cropResults',viewController.cropResults_post)
// router.post('/enterdata',viewController.enter_data)

module.exports = router;