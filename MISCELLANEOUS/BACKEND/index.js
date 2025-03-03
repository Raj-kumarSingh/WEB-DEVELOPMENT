const express=require("express");
const app=express();
const port=8000;
app.get('/register',(req,res)=>{
    res.send("standard get responde");
})
app.post('/register',(req,res)=>{
    res.send("standard post response");
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})