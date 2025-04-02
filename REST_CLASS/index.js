const express = require("express");
const app = express();
const port = 8000;
const path=require("path");


const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this to handle JSON requests

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[ 
    {
        id: uuidv4(),
        username: "Focus on Careers",
        content : "I love coding ",
    },
    {
        id : uuidv4(),
        username: "Raj Singh",
        content : "I got selected for my 1st internship",
    },
    {
        id : uuidv4(),
        username: "Singh Ji",
        content : "Hard work is important to achieve success",
    },
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    
    let {username,content} = req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");

})
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p) => id===p.id);
    res.render("show.ejs",{post});
    // console.log(post);
    // posts.push({username,content});
    // res.send("request working");

})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    console.log(newContent);
    console.log(id);
    res.send("patch request working..");
})
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
