const Joi = require('joi');
const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema(
  {
    fullname: String,
    email: String,
    phone: String,
    password: String,
    role:{
      type:String,
      enum:['admin','moderator','user'],
      default:'user'
    }
  },
  { timestamps: true }
);

const userValidate = (user) => {
  const schema = Joi.object({
    fullname: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    password: Joi.string(),
    role:Joi.string()
  });
  return schema.validate(user);
};

const User = mongoose.model('uUserser', userSchema);
module.exports = { User, userValidate };
