const userSchema=require('../model/user.model');
const express=require('express');
const userRoute=express.Router();




userRoute.post('/validate',(req,res)=>{
    
    userSchema.find(req.body).exec(async(err,document)=>{
         if(err)
         {
             res.json(err);
             console.log(err)
         }  
         else
         {
             let user=document;
             if(user.length <=0)
             {
                 res.statusCode=500;
                 res.statusMessage="user not found"
                 res.send("NOT FORUND")
             }
             else
             {
                 user[0].password=await null;
                 res.json(user);
             }
         }



    })
})

module.exports=userRoute;