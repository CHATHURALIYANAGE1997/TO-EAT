const express=require('express');
var cors=require('cors');
const connection=require('./connection');
const userRoute=require('./routes/user');
const customerRoute=require('./routes/customer');
const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('./user',userRoute);
app.use('./customer',userRoute);
app.use('./admin',userRoute);


module.exports=app;
