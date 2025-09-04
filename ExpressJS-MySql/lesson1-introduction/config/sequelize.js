const config = require('./config.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: 'mysql',
    host: config.db.host,
    define: {
      timestamps: false,
    },
  }
);

const connect = async function () {
 try {
  await sequelize.authenticate();
   console.log("mysql connection is successfully")
 } catch (error) {
  console.log(error);
 } 
}

connect();

module.exports = sequelize;
