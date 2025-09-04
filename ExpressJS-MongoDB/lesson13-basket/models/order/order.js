const Joi = require('joi');
const { default: mongoose } = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    basket: { type: mongoose.Schema.Types.ObjectId, ref: 'Basket' },
    details: {
      fullname: String,
      number: String,
      email: String,
      address: String,
    },
    orderStatus: {
      type: String,
      enum: ['success', 'cancel', 'pending'],
      default: 'pending',
    },
    date: String,
  },
  { timestamps: true }
);

const orderValidate = (order) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    basket: Joi.string().required(),
    details: Joi.object(),
    orderStatus: Joi.string(),
    date: Joi.string().required(),
  });
  return schema.validate(order);
};

const Order = mongoose.model('Order', orderSchema);
module.exports = { Order, orderValidate };
