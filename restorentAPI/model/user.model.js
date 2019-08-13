const mongoose =require('mongoose');
const UserScheam=mongoose.Schema({
    user_id:String,
    username:String,
    password:String
});

module.exports=mongoose.model('user',UserScheam,'USERS');