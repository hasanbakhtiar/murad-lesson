const express = require('express');
const app = express();

const cors = require('cors');
const connectdb = require('./config/connectdb');

app.use(express.json());
const corsOptions = {
  origin: ['http://127.0.0.1:5500'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));


// static access start
const {staticAccess} = require('./middlewares/staticAccess');
app.use(staticAccess);

// static access end
//


const authAccess = require('./middlewares/auth');
 app.use(authAccess);



const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

 


app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/category', categoryRoute);
app.use('/', authRoute);


app.use('/', (req, res) => {
  res.send('Start App');
});

connectdb();

app.listen(3000, () => {
  console.log('Server on port 3000 running...');
});
