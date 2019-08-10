const express=require('express');
const bodyParser=require('body-parser'); 
const cors=require('cors')                 
require('./config/mongoose');
const studentRouter=require('./routes/student.routes')
const resturant=require('./routes/restaurant.route')
const app=express();

app.use(bodyParser.json());
app.use(cors())
app.use('/api',studentRouter);
app.use('/api',resturant);

const port=4000;
//app.use(bodyParser().jso);

app.listen(port,()=>
{
    
        console.log('startd' + port);
    
});