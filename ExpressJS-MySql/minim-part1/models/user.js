const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const User = sequelize.define(
    "user",
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM,
            values:['admin','user'],
            default:"user",
            allowNull: false,
        },
    },
    { timestamps: false },
);

module.exports = User;
