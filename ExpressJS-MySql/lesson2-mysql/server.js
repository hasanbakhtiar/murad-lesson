const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const connection = require("./config/connect.js");

app.get("/product", (req, res) => {
  connection.query(
    "SELECT * FROM products ORDER BY title ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    },
  );
});

app.post("/product", (req, res) => {
  const sql = ` INSERT INTO products (title, price, description ) VALUES ("${req.body.title}", ${req.body.price},"${req.body.description}")`;

  connection.query(sql, (err, result, fields) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result, fields);
    }
  });
});

app.put("/product/:id", (req, res) => {
  const sql = `UPDATE products SET title="${req.body.title}" WHERE id = ${req.params.id} LIMIT 1`;
  connection.query(sql, (err, result, fields) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result, fields);
    }
  });
});

app.get("/", (req, res) => {
  res.send("App Start");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
