const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Product = sequelize.define(
  "product",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  { timestamps: false },
);

module.exports = Product;
