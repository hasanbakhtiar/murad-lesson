const { User,userValidate } = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const isSuccess = await bcrypt.compare(req.body.password, user.password);
    if (isSuccess) {
      const token = user.createAuthToken();
      res
        .status(200)
        .header('login-auth-token', token)
        .json({
          message: 'Login is successfully',
          data: {
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
          },
        });
    } else {
      res.status(401).send('Email or password is wrong!');
    }
  } else {
    res.status(401)
      .json({ message: 'User not found or password is incorrect!' });
  }
};

exports.register= async (req, res) => {
  const { error } = userValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      res.status(409).json({
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
