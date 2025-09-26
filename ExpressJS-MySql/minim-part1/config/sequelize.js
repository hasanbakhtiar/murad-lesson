const Sequelize = require("sequelize");
const { config } = require("./db.js");

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: "mysql",
    host: config.db.host,
    define: {
      timestamps: false,
    },
  },
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connection is successful");
  } catch (error) {
    console.log(error);
  }
};

connect();

module.exports = sequelize;
