const express=require('express');
const app=express();
const port=8000;
const path=require('path');
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
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
    let {username}=req.params;
    const instaData=require("./data.json");
    const data =instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs",{data:instaData[username]});
    }else{
        res.render("error.ejs");
    }
});