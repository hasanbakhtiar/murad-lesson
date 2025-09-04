const { Product } = require('../models/product');
exports.listProduct = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  const result = await product.save();
  res.status(201).json(result);
};
