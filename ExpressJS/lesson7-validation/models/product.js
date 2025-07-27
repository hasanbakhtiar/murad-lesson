const Joi = require('joi');
const { default: mongoose } = require('mongoose');

const productSchema = mongoose.Schema(
  {
    productID: String,
    title: String,
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

const productValidate = (product) => {
  const schema = Joi.object({
    productID: Joi.string(),
    title: Joi.string().required().min(2).max(30).messages({
      'any.required': 'Muhsulun adi mutleq qeyd olunmalidir',
      'string.min': 'Mehsulun adi 2 simvoldan ibaret ola bilmez',
      'string.max': 'Mehsulun adi 30 simvoldan artiq ola bilmez',
    }),
    price: Joi.number(),
    description: Joi.string(),
    category: Joi.string(),
    active: Joi.boolean(),
  });
  return schema.validate(product);
};

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productValidate };
