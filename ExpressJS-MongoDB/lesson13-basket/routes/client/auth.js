
const express = require('express');
const route = express.Router();
const {login,register} = require('../../controllers/auth/auth');

route.post('/login', login);
route.post('/register', register);



module.exports = route;

