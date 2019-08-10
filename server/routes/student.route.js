const express=require('express');
const studentCtrl=require('../controllers/student.controllers');
const router=express.Router();


router.route('/studentData').post(student);
router.route('/studentGetData').get(student);

function student(req,res)
{
    studentCtrl.insert(req.body);
    res.json({'status':"success"});
}

function student(req,res)
{
    studentCtrl.fetch()
res.json(student)
}







module.exports=router;