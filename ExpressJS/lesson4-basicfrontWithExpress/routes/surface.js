const express =require('express');
const route = express.Router();
const path = require('path');




route.use('/service/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/service-details.html'));
})

route.use('/portfolio/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/portfolio-details.html'));
})

route.use('/starter',(req,res)=>{
      res.sendFile(path.join(__dirname,'../views/starter-page.html'));
})

route.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'));
})



module.exports = route;
