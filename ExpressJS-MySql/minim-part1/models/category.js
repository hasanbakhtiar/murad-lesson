const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Category = sequelize.define(
  "category",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

module.exports = Category;
