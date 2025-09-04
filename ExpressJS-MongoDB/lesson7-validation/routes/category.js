const express = require('express');
const route = express.Router();
const {listCategory,createCategory, deleteAllCategory, deleteSingleCategory, updateCategory} = require('../controllers/category');

route.get('/', listCategory);
route.post('/', createCategory);
route.put('/:id', updateCategory);

route.delete('/delete/all',deleteAllCategory);
route.delete('/delete/:id',deleteSingleCategory);



module.exports = route;

