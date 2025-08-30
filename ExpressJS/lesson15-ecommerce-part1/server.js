const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectdb = require('./config/connectdb');


//=======================CORS config Start=======================

app.use(express.json());
const corsOptions = {
  origin: ['http://127.0.0.1:5500'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));


//=======================Swagger Routers Start=======================


const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const session = require('express-session');
const passport = require('passport');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//=======================Surface Routers Start=======================

const surfaceRoute = require('./routes/client/surface');
app.use('/api/v1/',surfaceRoute);

const authRoute = require('./routes/client/auth');
app.use('/api/v1/',authRoute);


//=======================NeedAuth Routers Start=======================

const accountRoute = require('./routes/needAuth/account');
const basketRoute = require('./routes/needAuth/basket');
const orderRoute = require('./routes/needAuth/order');

app.use('/api/v1/account',accountRoute);
app.use('/api/v1/basket',basketRoute);
app.use('/api/v1/order',orderRoute);


//=======================Admin Routers Start=======================

const productRoute = require('./routes/admin/product');
const categoryRoute = require('./routes/admin/category');
const userRoute = require('./routes/admin/user');

const adminRouteStart = '/api/v1/ad';
app.use(`${adminRouteStart}/user`, userRoute);
app.use(`${adminRouteStart}/product`, productRoute);
app.use(`${adminRouteStart}/category`, categoryRoute);



//=======================App Starter Start=======================

app.use('/', (req, res) => {
  res.send('Start App');
});

connectdb();

app.listen(3000, () => {
  console.log('Server on port 3000 running...');
});
