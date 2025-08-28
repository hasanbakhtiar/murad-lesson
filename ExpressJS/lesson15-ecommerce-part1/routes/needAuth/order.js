

const express = require('express');
const route = express.Router();
const {listOrderForUser,createOrderForUser} = require('../../controllers/order/order');

route.get('/:userid', listOrderForUser);
route.post('/', createOrderForUser);



module.exports = route;

