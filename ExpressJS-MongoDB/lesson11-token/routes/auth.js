
const express = require('express');
const route = express.Router();
const {login,register} = require('../controllers/auth');

route.post('/login', login);
route.post('/register', register);
//
// route.get('/account/:id', unknow);
// route.put('account/:id', unknow);
// route.delete('/account/:id',unknow);
//


module.exports = route;

