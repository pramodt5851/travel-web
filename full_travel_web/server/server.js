const express=require('express');
const app=express();
app.use(express.json());
app.get('/api/search',(req,res)=>res.json({results:[]}));
app.post('/api/book',(req,res)=>res.json({bookingId:Math.floor(Math.random()*90000+10000),status:'ok'}));
app.listen(5000,()=>console.log('API running on 5000'));