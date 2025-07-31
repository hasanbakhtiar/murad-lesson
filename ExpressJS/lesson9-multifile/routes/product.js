const express = require('express');
const route = express.Router();
const {listProduct,createProduct, deleteAllProducts, deleteSingleProduct, updateProduct} = require('../controllers/product');
const upload = require('../middlewares/uploadFile');
route.get('/', listProduct);

route.post('/',upload.single('thumbnail'), createProduct);
route.put('/:id',upload.single('thumbnail'), updateProduct);

route.delete('/delete/all',deleteAllProducts);
route.delete('/delete/:id',deleteSingleProduct);



module.exports = route;

