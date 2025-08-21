const { default: mongoose } = require('mongoose');

const basketSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        subTotal: Number,
      },
    ],
    totalAmount: Number,
  },
  { timestamps: true }
);



const Basket = mongoose.model('Basket', basketSchema);
module.exports = { Basket };
