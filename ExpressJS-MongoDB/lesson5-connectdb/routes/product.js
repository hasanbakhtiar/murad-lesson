const express = require('express');
const route = express.Router();
const {listProduct,createProduct} = require('../controllers/product');

route.post('/', createProduct);
route.get('/', listProduct);



module.exports = route;

