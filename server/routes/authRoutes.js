const {Router} = require('express')
const viewController = require('../controllers/viewController')
const UserController = require('../controllers/UserController')
const cartController = require('../controllers/cartController')
const messageController = require('../controllers/messageController')
const imageController = require('../controllers/imageController')

const router = Router()

//Schemas


//user

/**
* @swagger
* components:
*     schemas:
*        User:
*            type: object
*            required:
*             - email
*             - name
*             - password
*            properties:
*               email:
*                 type: string
*                 format: email
*                 description: User's email address
*                 example: user@gmail.com
*                 uniqueItems: true
*               name:
*                 type: string
*                 description: User's full name
*                 example: John Doe
*                 required: true
*                 minLength: 4
*               password:
*                 type: string
*                 description: User's password
*                 example: mysecretpassword
*                 minLength: 8
*               profilepic:
*                 type: string
*                 description: User's profile picture
*                 example: https://example.com/profilepic.jpg
*
*/

//seller

/**
* @swagger
* components:
*     schemas:
*        Sellar:
*           type: object
*           required:
*             - email
*             - name
*             - password
*           properties:
*             email:
*               type: String
*               description: The email of the seller
*               example: seller@gmail.com
*               uniqueItems: true
*             name:
*               type: String
*               description: The name of the seller
*               example: rakesh
*             password:
*               type: String
*               description: The password of the seller
*               example: Rakesh@2000
*/


//Product

/**
* @swagger
* components:
*     schemas:
*        Product:
*          type: object
*          required:
*             - category 
*             - name 
*             - mrp 
*             - price 
*             - sellerId
*             - manufacturer
*             - weight
*             - stock
*          properties:
*            category:
*              type: string
*              description: The category of the product
*              example: seeds
*            name:
*              type: string
*              description: The name of the product
*              example: Black Gram
*            mrp:
*              type: number
*              description: The mrp of the product
*              example: 850
*            price:
*              type: number
*              description: The price of the product
*              example: 800
*            sellerId:
*              type: string
*              description: The sellerId of the product
*              example: 62bab7fd9fdb31dcda721464
*            manufacturer:
*              type: string
*              description: The manufacturer of the product
*              example: SK Black gram seeds
*            weight:
*              type: number
*              description: The weight of the product
*              example: 4000
*            stock:
*              type: boolean
*              description: The stock of the product
*              example: true
*            img1:
*              type: string
*              description: The img1 of the product
*              example: /Product_Images/3007_img1.png
*            img2:
*              type: string
*              description: The img2 of the product
*              example: /Product_Images/3007_img2.png
*            description:
*              type: string
*              description: The description of the product
*              example: Treat the seeds with 3 packets (600 g/ha) of Rhizobial culture CRU-7 + 3 packets (600 g/ha) of PGPR  and 3 packets(600 g/ha)  of Phosphobacteria developed at TNAU using rice kanji as binder.
*            expiry:
*              type: string
*              description: The expiry of the product
*              example: 2024-12-18

*/


//Message

/**
* @swagger
* components:
*     schemas:
*        Message:
*          type: object
*          required: 
*             - msg_id
*             - username
*             - message
*             - timestamp
*          properties:
*            msg_id:
*              type: string
*              description: The unique ID of the message
*              example: 123456
*            referedTo:
*              type: string
*              description: The ID of the message that this message refers to
*            username:
*              type: string
*              description: The username of the message sender
*              example: JohnDoe
*            message:
*              type: string
*              description: The message content
*              example: Hello, world!
*            timestamp:
*              type: string
*              format: date-time
*              description: The timestamp of the message
*              example: 2022-03-22T09:47:11Z
 */

//Crop

/**
* @swagger
*components:
*   schemas:
*       Crop:
*         type: object
*         required: 
*            - name
*            - soil
*            - season
*            - investment
*            - waterReq
*            - profit
*            - breif
*            - info
*            - img
*         properties:
*           name:
*             type: string
*             description: The name of the crop
*             example: Wheat
*           soil:
*             type: string
*             description: The type of soil required for the crop
*             example: Loamy Soil
*           season:
*             type: array
*             required:
*               - items
*             description: The seasons in which the crop can be grown
*             items:
*               type: string
*               description: The season in which crop can be grown
*               example: Winter
*           investment:
*             type: number
*             format: double
*             description: The investment required for the crop
*             example: 5000
*           waterReq:
*             type: number
*             format: double
*             description: The water requirement for the crop
*             example: 100
*           profit:
*             type: number
*             format: double
*             description: The profit that can be earned from the crop
*             example: 8000
*           brief:
*             type: string
*             description: A brief description of the crop
*             example: Wheat is a cereal crop
*           info:
*             type: string
*             description: Detailed information about the crop
*             example: Wheat is one of the most important staple crops
*           img:
*             type: string
*             description: The URL of the image for the crop
*             example: https://example.com/images/wheat.jpg
*/

//Cart

/**
* @swagger
*components:
*   schemas:
*       Cart:
*           type: object
*           required: 
*               - user_id
*               - items
*           properties:
*               user_id:
*                   type: string
*                   format: objectid
*                   description: The ID of the user who created the order
*                   example: 615239f801f8ea7b1d408ba2
*               items:
*                    type: array
*                    required: 
*                       - item
*                    description: The list of items in the order
*                    items:
*                       type: object
*                       required:
*                         - prod_id
*                         - name
*                         - quantity
*                         - price
*                         - mrp
*                         - img
*                       properties:
*                           prod_id:
*                              type: string
*                              format: objectid
*                              description: The ID of the product
*                              example: 61523a0901f8ea7b1d408bb0
*                           name:
*                              type: string
*                              description: The name of the product
*                              example: iPhone 13 Pro
*                           quantity:
*                              type: integer
*                              description: The quantity of the product ordered
*                              example: 2
*                           price:
*                              type: number
*                              description: The price of the product
*                              example: 999.99
*                           mrp:
*                              type: number
*                              description: The MRP of the product
*                              example: 1099.99
*                           img:
*                              type: string
*                              description: The URL of the product image
*                              example: https://example.com/images/iphone13pro.jpg
*                       
*               
*/

// Authentication Routes

/**
* @swagger
* tags:  
*   name: Authentication Routes 
*   description: Authentication Routes managing API  
*/

/**
* @swagger 
* /login: 
*   post: 
*     summary: Checking login details
*     tags: [Authentication Routes] 
*     requestBody: 
*       required: true 
*       content:  
*           application/json: 
*               schema: 
*                   type: object
*                   properties:
*                       email: 
*                           type: string
*                           example: test@gmail.com
*                       password:
*                           type: string
*                           example: 12345678
*     responses:
*       200:
*         description: The login details are successfully checked
*         content:
*           application/json:
*               schema:
*                 type: string
*       500:
*        description: some server error
*/


/**
* @swagger 
* /signup: 
*   post: 
*     summary: Inputing signup details
*     tags: [Authentication Routes] 
*     requestBody: 
*       required: true 
*       content:  
*           application/json: 
*               schema: 
*                   type: object
*                   properties:
*                       email: 
*                           type: string
*                           example: subhash@gmail.com
*                       name:
*                           type: string
*                           example: subhash
*                       password:
*                           type: string
*                           example: subhash1
*     responses:
*       200:
*         description: The signup details are successfully saved
*         content:
*           application/json:
*               schema:
*                 type: string
*       500:
*        description: some server error
*/


router.post('/login',UserController.login_post);
router.post('/signup',UserController.signup_post);


//Pages Routes

/**
* @swagger
* tags:  
*   name: Page Routes  
*   description: Page Routes managing API  
*/

/**
* @swagger
* /Market: 
*    get:
*      summary: Returns the list of all the products
*      tags: [Page Routes]
*      responses:
*         200:
*           description: The list of the products
*           content:
*               application/json:
*                  schema:
*                     type: array
*                     items:
*                        $ref: '#/components/schemas/Product'
*/ 


/**
* @swagger 
* /adminportal: 
*  post: 
*   summary: Displaying admin portal details 
*   tags: [Page Routes] 
*   requestBody: 
*     required: true 
*     content:  
*         application/json: 
*             schema: 
*              type: object
*              properties:
*                email:
*                  type: string 
*                  example: rakesh.b20@iiits.com 
*              required:
*                   - email
*   responses:
*     200:
*       description: The admin portal details are successfully fetched
*       content:
*         application/json:
*             schema:
*               type: object
*               properties:
*                   data:
*                     type: object
*                     properties:
*                       seeds:
*                           type: integer
*                       fertilizers:
*                           type: integer
*                       pesticides:
*                           type: integer
*                       total:
*                           type: integer
*                   product:
*                     type: array
*                     items:
*                        $ref: '#/components/schemas/Product'
*     500:
*      description: some server error
*/


/**
* @swagger
* /crops: 
*    get:
*      summary: Returns the list of all the crops
*      tags: [Page Routes]
*      responses:
*         200:
*           description: The list of the crops
*           content:
*               application/json:
*                  schema:
*                     type: array
*                     items:
*                        $ref: '#/components/schemas/Crop'
*/

/**
* @swagger 
* /croppage/{id}: 
*   get:  
*    summary: Get the crop by id 
*    tags: [Page Routes] 
*    parameters: 
*      - in: path 
*        name: id 
*        example: 6266c1eb8551054ee309ad18
*        required: 
*           - id 
*        schema: 
*         type: string 
*         description: The crop id 
*    responses: 
*      200: 
*        description: The crop description by id 
*        content: 
*          application.json: 
*             schema:  
*               $ref: '#/components/schemas/Crop'
*      404: 
*       description: The crop was not  found 
*/


/**
* @swagger 
* /productpage/{id}: 
*   get:  
*    summary: Get the product by id 
*    tags: [Page Routes] 
*    parameters: 
*      - in: path 
*        name: id 
*        example: 62b5429ede648d15e4d2fe17
*        schema: 
*         type: string 
*         required: true 
*         description: The product id 
*    responses: 
*      200: 
*        description: The product description by id 
*        content: 
*          application.json: 
*             schema:  
*               $ref: '#/components/schemas/Product'
*      404: 
*       description: The product was not  found 
*/


/**
* @swagger 
* /search: 
*  post: 
*   summary: Searching a product 
*   tags: [Page Routes] 
*   requestBody: 
*     required: true 
*     content:  
*         application/json: 
*             schema: 
*                  type: object
*                  properties:
*                      query:
*                         type: string
*                         example: gram
*                  required:
*                       - query
*   responses:
*     200:
*       description: The product is successfully fetched
*       content:
*         application/json:
*             schema:
*               $ref: '#/components/schema/Product'
*     500:
*      description: some server error
*/


router.get('/Market',viewController.market_get);
router.post('/adminportal',viewController.adminportal_post);
router.get('/crops',viewController.getCrops_get);
router.get('/croppage/:id',viewController.croppage_id_get);
router.get('/productpage/:id',viewController.productpage_id_get);
router.post('/search',viewController.search_post);
// router.post('/cropResults',viewController.cropResults_post);

// Cart Routes

/**
* @swagger
* tags:  
*   name: Cart Routes  
*   description: Page Routes managing API  
*/

/**
* @swagger 
* /Cart/{email}: 
*   get:  
*    summary: Get the products in the cart 
*    tags: [Cart Routes] 
*    parameters: 
*      - in: path 
*        name: email   
*        schema: 
*         type: string 
*         example: karthikpalani@gmail.com
*         description: The email of the user 
*    responses: 
*      200: 
*        description: The product description by id 
*        content: 
*          application.json: 
*             schema:  
*               $ref: '#/components/schemas/Cart'
*      404: 
*       description: The product was not  found 
*/

/**
* @swagger 
* /addToCart: 
*  post: 
*   summary: Adding a product to the cart 
*   tags: [Cart Routes] 
*   requestBody: 
*     required: true 
*     content:  
*         application/json: 
*             schema: 
*              type: object
*              properties:
*                prod:
*                  $ref: '#/components/schemas/Product' 
*                email: 
*                  type: string
*                  example: test@gmail.com
*              required:
*                - email
*   responses:
*     200:
*       description: The product is successfully added to cart
*       content:
*         application/json:
*             schema:
*               type: string
*     500:
*      description: some server error
*/


/**
* @swagger 
* /delete-item: 
*  post: 
*   summary: Deleting a product to the cart 
*   tags: [Cart Routes] 
*   requestBody: 
*     required: true 
*     content:  
*         application/json: 
*             schema: 
*              type: object
*              properties:
*                item_id:
*                  type: string 
*                  example: 641abdc3d0b05b7bbe94e285 
*                email: 
*                  type: string
*                  example: karthikpalani@gmail.com
*              required:
*                - email
*                - item_id
*   responses:
*     200:
*       description: The product is successfully added to cart
*       content:
*         application/json:
*             schema:
*               type: string
*     500:
*      description: some server error
*/


router.get('/Cart/:email',cartController.Cart_get);
router.post('/addToCart',cartController.addToCart_post);
router.post('/delete-item',cartController.deleteItem_post);


// Message Routes

/**
* @swagger
* tags:  
*   name: Message Routes  
*   description: Page Routes managing API  
*/

/**
* @swagger
* /fetchMessages: 
*    get:
*      summary: Returns all the messages in the chat section
*      tags: [Message Routes]
*      responses:
*         200:
*           description: The list of the messages
*           content:
*               application/json:
*                  schema:
*                     type: array
*                     items:
*                        $ref: '#/components/schemas/Message'
*/ 

/**
* @swagger 
* /sendMessages: 
*  post: 
*   summary: Send a message in the chat section
*   tags: [Message Routes] 
*   requestBody: 
*     required: true 
*     content:  
*         application/json: 
*             schema: 
*                 $ref: '#/components/schemas/Message' 
*   responses:
*     200:
*       description: created a message in the chat section
*       content:
*         application/json:
*             schema:
*               $ref: '#/components/schemas/Message'
*     500:
*      description: some server error
*/

router.get('/fetchMessages',messageController.fetch_messages);
router.post('/sendMessages',messageController.send_messages);

// Image Routes
router.post('/uploadprofilepic/:email', imageController.ProfilePicUpload_post);

module.exports = router;