const  app=require('./server/config/express');
           require('./server/config/mongoose');
const port=3000  
const  cors=require('cors');
app.use(cors())


app.listen(port,()=>{
    console.log("Server started");
})
app.get('/',(req,res)=>{
    res.send("I m from get server.js file");
})

module.exports=app;