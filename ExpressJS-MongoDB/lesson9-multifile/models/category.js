const Joi = require('joi');
const { default: mongoose, Schema } = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const categoryValidate = (category)=>{
  const schema = Joi.object({
    title:Joi.string().required()
  })
  return schema.validate(category);
}

const Category = mongoose.model('Category', categorySchema);
module.exports = { Category,categoryValidate };
