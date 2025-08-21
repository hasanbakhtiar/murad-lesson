
const { Order, orderValidate } = require('../../models/order/order');

exports.listOrder = async (req, res) => {
  const order = await Order.find();
  res.status(200).json(order);
};

exports.listOrderForUser = async (req, res) => {
    const order = await Order.find({user:req.params.userid}).populate('user basket');
    res.status(200).json(order);
};

exports.createOrderForUser = async (req, res) => {
  const { error } = orderValidate(req.body);
  if (error) {
    res.status(400).send(error.message);
  } else {
    const order = new Order(req.body);
    const result = await order.save();
    res.status(201).json({
      message: 'order create successfully',
      data: result,
    });
  }
};

exports.deleteSingleOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    res.status(200).json({
      message: 'This data delete successfully',
      data: order,
    });
  }
};


