const express = require('express');
const route = express.Router();
const {
  createProduct,
  deleteAllProducts,
  deleteSingleProduct,
  updateProduct,
} = require('../../controllers/product');
const upload = require('../../middlewares/uploadFile');


route.post(
  '/',
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 5 },
  ]),
  createProduct
);

route.put(
  '/:id',
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 5 },
  ]),
  updateProduct
);

route.delete('/delete/all', deleteAllProducts);
route.delete('/delete/:id', deleteSingleProduct);

module.exports = route;
