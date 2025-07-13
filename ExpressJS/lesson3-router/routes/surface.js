const express = require('express');
const route = express.Router();
const path = require('path');

route.use('/products/:cat', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/product-details.html'));
});
route.use('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/products.html'));
});
route.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/homepage.html'));
});

module.exports = route;
