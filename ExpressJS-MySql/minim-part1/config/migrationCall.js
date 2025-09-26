const Category = require("../models/category");
const Product = require("../models/product");
const User = require("../models/user");

const migrationCall = () => {
  async function sync() {
    await Product.sync({force:true})
    await Category.sync({force:true})
    await User.sync({force:true})
  }
  sync();
};

const relationCall = async ()=>{
  Product.belongsTo(Category,{
    foreignKey:{
    allowNull:true
  }})
}

module.exports = { migrationCall, relationCall };
