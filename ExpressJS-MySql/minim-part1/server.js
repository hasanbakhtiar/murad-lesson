const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./config/sequelize");

app.use(express.json());
app.use(cors());

const {migrationCall, relationCall} = require('./config/migrationCall.js')
// relationCall();
// migrationCall();

async () => {
  await sequelize.sync({ force: true });
};

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
