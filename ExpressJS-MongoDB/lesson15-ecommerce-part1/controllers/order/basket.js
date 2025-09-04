const { Basket } = require('../../models/order/basket');

exports.listBasketForUser = async (req, res) => {
  const basket = await Basket.find({ user: req.params.userid }).populate("products.product");
  res.status(200).json(basket);
};

exports.updateBasketForUser = async (req, res) => {
  const basket = await Basket.findOneAndUpdate(
    { user: req.params.userid },
    {
      ...req.body,
    }
  );
  if (!basket) {
    res.status(404).json({
      message: 'There is no such data',
    });
  } else {
    res.status(200).json({
      message: 'basket update successfully',
      data: basket,
    });
  }
};
