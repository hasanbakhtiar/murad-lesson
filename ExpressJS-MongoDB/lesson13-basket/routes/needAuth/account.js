

const express = require('express');
const route = express.Router();
const {listCategory} = require('../../controllers/category');
const {listProduct} = require('../../controllers/product');

route.get('/products', listProduct);
route.get('/categories', listCategory);



module.exports = route;

