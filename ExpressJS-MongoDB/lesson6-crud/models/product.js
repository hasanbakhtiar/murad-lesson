const { default: mongoose } = require('mongoose');

const productSchema = mongoose.Schema(
  {
    productID:String,
    title: {
      type: String,
      required: true,
    },
    price: Number,
    description: String,
    category: { type: mongoose.Types.ObjectId, ref: 'Category' },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = { Product };
