const express = require('express');
const app = express();
const connectdb = require('./config/connectdb');

app.use(express.json());

const productRoute = require('./routes/product');

app.use('/product', productRoute);
app.use('/', (req, res) => {
  res.send('Start App');
});

connectdb();

app.listen(3000, () => {
  console.log('Server on port 3000 running...');
});
