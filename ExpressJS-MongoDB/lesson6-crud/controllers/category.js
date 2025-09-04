const { Category } = require('../models/category');

exports.listCategory = async (req, res) => {
  const category = await Category.find();
  res.status(200).json(category);
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  const result = await category.save();
  res.status(201).json({
    message: 'category create successfully',
    data: result,
  });
};

exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, {...req.body});
  if (!category) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    res.status(200).json({
      message: 'category update successfully',
      data: category,
    });
  }
};

exports.deleteSingleCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    res.status(200).json({
      message: 'This data delete successfully',
      data: category,
    });
  }
};

exports.deleteAllCategory = async (req, res) => {
  const category = await Category.deleteMany();
  if (category) {
    res.status(200).json({
      message: 'Delete all categorys',
      data: category,
    });
  } else {
    res.status(404).json({
      message: 'This is empty',
    });
  }
};
