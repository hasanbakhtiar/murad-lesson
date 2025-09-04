

const express = require('express');
const route = express.Router();
const {listBasketForUser,updateBasketForUser} = require('../../controllers/order/basket');

route.get('/:userid', listBasketForUser);
route.put('/:userid', updateBasketForUser);



module.exports = route;

