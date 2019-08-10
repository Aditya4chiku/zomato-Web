const express=require('express');
const router=express.Router();
const resturantModel=require('../model/resturant.model')


router.get('/resturant',(req,res)=>{
     resturantModel.find({},(err,resturant)=>{
         if(err)
         {
             console.log("Error in getting in db")
         }
         else
         {   res.setHeader('Content-Type','Application/Json');
             res.json(resturant);
         }

     })

})

router.post('/resturant',(req,res)=>{
   let resturant=new resturantModel({
       name:req.body.name,
       thumb:req.body.thumb,
       location:req.body.location
   })

   resturant.save().then(data=>{res.send(data)}).catch((err)=>{
       res.send(err)
   })

})
module.exports=router