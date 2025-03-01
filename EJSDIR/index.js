const express=require('express');
const app=express();
const port=8000;
const path=require('path');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.get("/rolldice",(req,res)=>{
    const diceVal=Math.floor(Math.random()*6+1);
    res.render("rolldice.ejs",{num:diceVal});
})
app.get("/ig/:username",(req,res)=>{
    // const followers=["Addam","Bobby","Raj","Ashwini","Bholu"];
    // let {username}=req.params; 
    // res.render("instagram.ejs",{username,followers});
    const instaData=require("./data.json");
    console.log(instaData);
    
    res.render("instagram.ejs");
});