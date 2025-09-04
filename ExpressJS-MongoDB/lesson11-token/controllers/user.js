const { User, userValidate } = require('../models/user');
const bcrypt = require('bcrypt');

exports.listUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const { error } = userValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      res.status(400).json({
        message: 'Already exist this user',
      });
    } else {
      if (req.body.role === 'admin') {
        const findAdmin = await User.find({ role: 'admin' });
        if (findAdmin) {
          res.status(403).json({
            message: 'Already exist admin user',
          });
        } else {
          const user = new User(req.body);
          const hashPassword = await bcrypt.hash(req.body.password, 10);
          user.password = hashPassword;
          const result = await user.save();
          res.status(201).json({
            message: 'user create successfully',
            data: result,
          });
        }
      } else {
        const user = new User(req.body);
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashPassword;
        const result = await user.save();
        res.status(201).json({
          message: 'user create successfully',
          data: result,
        });
      }
    }
  }
};

exports.updateUser = async (req, res) => {
  const { error } = userValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    const user = await User.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (!user) {
      res.status(404).json({
        message: 'There is no such data',
      });
    } else {
      res.status(200).json({
        message: 'user update successfully',
        data: user,
      });
    }
  }
};

exports.deleteSingleUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    res.status(200).json({
      message: 'This data delete successfully',
      data: user,
    });
  }
};

exports.deleteAllUser = async (req, res) => {
  const user = await User.deleteMany();
  if (user) {
    res.status(200).json({
      message: 'Delete all users',
      data: user,
    });
  } else {
    res.status(404).json({
      message: 'This is empty',
    });
  }
};
