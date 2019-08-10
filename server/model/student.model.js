const mongoose=require('mongoose');
const Student=mongoose.Schema({
    name:String,
    roll:String
});


module.exports=mongoose.model('students',Student,'student');