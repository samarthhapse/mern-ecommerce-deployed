import express from 'express'
import { userSignUp,userLogin } from '../controller/user-controller.js';
import { getProducts,getProductById, getProductsfour,getProductsfive } from '../controller/product-controller.js';
import { getProductstwo } from '../controller/product-controller.js';
// import { Pay } from '../controller/pay.js';
// COMMENT BELOW LINE OUT
// import { addPaymentGateway } from '../controller/payment-controller.js';
// express.router is function for routing in express
const router = express.Router();
// when API hits '/signup' call the function userSignUp
router.post('/signup',userSignUp);
router.post('/login',userLogin);
// to fetch the products from database we are using get request
router.get('/products',getProducts);
router.get('/productstwo',getProductstwo);
router.get('/productsfour',getProductsfour);
router.get('/productsfive',getProductsfive);
router.get('/product/:id',getProductById);
// router.get('/pay',Pay);
// COMMENT BELOW LINE OUT
// router.post('/payment',addPaymentGateway);
export default router;