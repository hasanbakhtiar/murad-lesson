const mysql = require("mysql2");
const config = require("./db");
const connection = mysql.createConnection(config.db);

connection.connect((err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("mysql connect is successfully");
  }
});

module.exports = connection;
