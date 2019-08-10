const express=require('express');
const studentRoutes=require('./student.route');
const router=express.Router();

router.use('/students',studentRoutes);

module.exports=router;
