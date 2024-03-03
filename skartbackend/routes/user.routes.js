const express = require('express');
const router = express.Router();
const { signup, login, forgetpassword, getPinCodes, getAllProducts, addAllProducts, updateAllProducts } = require('../controllers/user.controllers.js');

// handling signup api 
router.post('/api/signup', signup)
// handling login api 
router.post('/api/login', login)
// handling forgetpass api 
router.post('/api/forgetpassword', forgetpassword)
// route for getting pincodes 
router.post('/api/pincode', getPinCodes)
// route for fetching the all products 
router.post('/api/getproducts', getAllProducts)
// route for adding the products 
router.post('/api/addproducts', addAllProducts)
// route for updating the products 
router.post('/api/updateproducts', updateAllProducts)









module.exports = router;