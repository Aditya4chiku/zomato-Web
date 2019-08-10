const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();
const studentModel=require('../model/student.model')





router.get('/student',(req,res)=>{
     
    studentModel.find({}).exec((err,stud)=>{



        if(err)
        {
            console.log(err)
        }
        else{
            res.send(stud)
        }
    })
   
})

router.post('/student',(req,res)=>{
   
let stud=new studentModel({
     name:req.body.name,
     roll:req.body.roll,
     age:req.body.age
})

stud.save().then(data=>{console.log(data)}).catch(err=>{console.log(err)})
res.send(stud)
})

module.exports=router;