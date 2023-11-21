const express = require('express');
const app = express();
require('dotenv').config();
const mongoose=require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(80,(err,res)=>{
        if(err){
            console.log('Error '+ err)
        }else{
            console.log('Connected Successfully')
        }
    });
}).catch(err=>{
    console.log(err.message);
});



app.get('/',(req,res)=>{
    res.send('Halla');
});