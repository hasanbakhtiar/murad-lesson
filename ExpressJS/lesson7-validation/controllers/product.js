const { Product, productValidate } = require('../models/product');
const { generatorSecureUniqueId } = require('../utils/idGenerator');
exports.listProduct = async (req, res) => {
  const product = await Product.find().populate('category');
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { error } = productValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    const product = new Product(req.body);

    product.productID = generatorSecureUniqueId();
    const result = await product.save();
    res.status(201).json({
      message: 'product create successfully',
      data: result,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { error } = productValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (!product) {
      res.status(404).json({
        message: 'There is no such data',
      });
    } else {
      res.status(200).json({
        message: 'product update successfully',
        data: product,
      });
    }
  }
};

exports.deleteSingleProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    res.status(200).json({
      message: 'This data delete successfully',
      data: product,
    });
  }
};

exports.deleteAllProducts = async (req, res) => {
  const product = await Product.deleteMany();
  if (product) {
    res.status(200).json({
      message: 'Delete all products',
      data: product,
    });
  } else {
    res.status(404).json({
      message: 'This is empty',
    });
  }
};
