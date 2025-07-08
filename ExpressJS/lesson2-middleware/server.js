//req------middleware1----------middleware2----------middleware3----->res

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('middleware1');
  next();
});

app.use((req, res,next) => {
  console.log('middleware2');
  next();
});

app.use((req, res,next) => {
  console.log('middleware3');
  next();
});

app.use((req, res) => {
  res.send("end");
});

app.listen(3000, () => {
  console.log('ExpressJS server listening on port 3000');
});
