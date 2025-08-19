const express = require('express');
const route = express.Router();
const {listUser,createUser, deleteAllUser, deleteSingleUser, updateUser} = require('../controllers/user');

route.get('/', listUser);
route.post('/', createUser);
route.put('/:id', updateUser);

route.delete('/delete/all',deleteAllUser);
route.delete('/delete/:id',deleteSingleUser);



module.exports = route;

