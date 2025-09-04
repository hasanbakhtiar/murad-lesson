const express = require('express');
const route = express.Router();
const {listProduct,createProduct, deleteAllProducts, deleteSingleProduct, updateProduct} = require('../controllers/product');

route.post('/', createProduct);
route.get('/', listProduct);
route.put('/:id', updateProduct);

route.delete('/delete/all',deleteAllProducts);
route.delete('/delete/:id',deleteSingleProduct);



module.exports = route;

