const mongoose=require('mongoose');
const StudentSchema=mongoose.Schema({
    name:{type:String},
    roll:{type:String},
    age:{type:Number}
});

module.exports=mongoose.model('student',StudentSchema,'students');
