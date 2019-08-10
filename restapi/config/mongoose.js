const mongoose=require('mongoose');
const url="mongodb://localhost:27017/crudwith";
mongoose.connect(url,()=>{
    console.log("Connected mongo")

})
module.exports=mongoose;