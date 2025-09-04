const express = require('express');

const app = express();
const path = require('path');

app.use("/libs",express.static(path.join(__dirname,"node_modules")));
app.use("/static",express.static(path.join(__dirname,"assets")));

const surfaceRoute = require('./routes/surface.js');

app.use('/',surfaceRoute);


app.listen(3000,()=>{console.log('app listening') })

