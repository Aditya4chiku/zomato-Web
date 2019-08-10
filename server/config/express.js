const express=require('express');
const bosyParser=require('body-parser');
const path=require('path');
const cors=require('cors');
const routes=require('../routes/index.route');

//configuration 
const app=express();
app.use(bosyParser.json());
app.use(bosyParser.urlencoded({extended:true}));
app.use('/api/',routes);

module.exports=app;