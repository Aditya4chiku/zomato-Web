const mongoose =require('mongoose');
const url='mongodb://localhost:27017/ng8crud'
mongoose.connect(url,(err)=>{
if(err)
{
    console.log("Error in db");
}
else{
    console.log("Connect to db");
}
})

module.exports=mongoose;