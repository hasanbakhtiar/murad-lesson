const express = require('express');
const app = express();
const sequelize = require('./config/sequelize.js');
const Product = require('./models/product.js');

app.use(express.json());

app.post('/product', async (req, res) => {
  try {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const active = req.body.active;
    await Product.create({
      title:title,
      price:price,
      description:description,
      active:active
    });
    res.send('ok');
  } catch (error) {
    console.log(error);
    res.send(error);
  } 
});


(async () => {
  await sequelize.sync({ force: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
