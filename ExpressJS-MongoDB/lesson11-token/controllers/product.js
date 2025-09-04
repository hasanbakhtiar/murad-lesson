const { default: slugify } = require('slugify');
const { Product, productValidate } = require('../models/product');
const { generatorSecureUniqueId, idForSlug } = require('../utils/idGenerator');
const {
  deleteSingleOldImage,
  deleteManyOldImage,
} = require('../utils/deleteOldImage');

exports.listProduct = async (req, res) => {
  if (req.query.nameSort) {
    let sortValue;
    if (req.query.nameSort === 'az') {
      sortValue = -1;
    } else if (req.query.nameSort === 'za') {
      sortValue = 1;
    }
    const product = await Product.find()
      .sort({ title: sortValue })
      .populate('category');
    res.status(200).json(product);
  } else {
    const product = await Product.find().populate('category');
    res.status(200).json(product);
  }
};

exports.createProduct = async (req, res) => {
  const { error } = productValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    let product;
    product = new Product(req.body);
    product.slug = slugify(req.body.title, { lower: true }) + '-' + idForSlug();
    product.productID = generatorSecureUniqueId();
    let filesObj = req.files;
    let filesObjLength = Object.keys(filesObj).length;

    if (filesObjLength !== 0) {
      const uploadFile = [];

      req.files.images.map(async (item) => {
        uploadFile.push(item.path);
      });

      product.images = uploadFile;
      product.thumbnail = req.files.thumbnail[0].path;
      const result = await product.save();
      res.status(201).json({
        message: 'product create successfully',
        data: result,
      });
    } else {
      const result = await product.save();
      res.status(201).json({
        message: 'product create successfully',
        data: result,
      });
    }
  }
};

exports.updateProduct = async (req, res) => {
  const { error } = productValidate(req.body);
  let product;
  if (error) {
    res.status(400).send(error.message);
  } else {
    let filesObj = req.files;
    let filesObjLength = Object.keys(filesObj).length;

    if (filesObjLength !== 0) {
       product = await Product.findByIdAndUpdate(req.params.id, {
                   ...req.body,
                 });
      if (!product) {
        res.status(404).json({
          message: 'There is no such data',
        });
      } else {
        product = await Product.findByIdAndUpdate(req.params.id, {
          ...req.body,
        });
        const oldImages = product.images;
        deleteManyOldImage(oldImages);
        const OldThumbnail = product.thumbnail;
        deleteSingleOldImage(OldThumbnail);
        const uploadFile = [];
        req.files.images.map(async (item) => {
          uploadFile.push(item.path);
        });
        product.images = uploadFile;
        product.thumbnail = req.files.thumbnail[0].path;
        await product.save();
        res.status(200).json({
          message: 'product update successfully',
          data: product,
        });
      }
    } else {
      product = await Product.findByIdAndUpdate(req.params.id, {
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
  }
};

exports.deleteSingleProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    deleteSingleOldImage(product.thumbnail);
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
