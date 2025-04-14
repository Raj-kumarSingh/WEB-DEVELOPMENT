const express = require("express");
const app = express();
const port = 8000;
const path=require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // JSON parsing should be added before routes


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
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id); // fixed comparison direction
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    post.content=req.body.content
    //console.log("Available Posts content:", content);
    console.log("Received ID:", id);
    console.log("Available Posts:", posts.map(p => p.id
        
    ));

    if (!post) {
        return res.status(404).send("Post not found");
    }

    if (req.body.content) {
        post.content = req.body.content;
    }

    res.send("Post updated successfully");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});