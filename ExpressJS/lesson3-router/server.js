const express = require('express');
const app = express();

const surfaceRoute = require('./routes/surface.js');

app.use('/',surfaceRoute);

// const {products} = require('./data/product.js');

// app.use('/products/:cat',(req,res)=>{
//  const cat = req.params.cat;
//   if (cat==="premium") {
//     res.send(products[0]);
//   }else if(cat==="gaming"){
//     res.send([products[1],products[2]])
//   }
// })
// app.use('/products',(req,res)=>{res.send("Products")});
// app.use('/',(req,res)=>{res.send("home page");})
//

app.listen(3000, () => {
  console.log('server on port 3000');
});
