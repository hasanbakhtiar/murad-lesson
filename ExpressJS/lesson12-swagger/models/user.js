const Joi = require('joi');
const { default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');

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


userSchema.methods.createAuthToken = function(){
  const decodeedToken = jwt.sign({
    _id:this._id,
    fullname:this.fullname,
    email:this.email,
    phone:this.phone,
    role: this.role
  },"jwtPrivateKey");

  return decodeedToken;

}



const User = mongoose.model('User', userSchema);
module.exports = { User, userValidate };
