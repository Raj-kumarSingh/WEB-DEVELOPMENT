const express = require("express");
const app = express();
const port = 8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username: "Focus on Careers",
        content : "I love coding ",
    },
    {
        username: "Raj Singh",
        content : "I got selected for my 1st internship",
    },
    {
        username: "Singh Ji",
        content : "Hard work is important to achieve success",
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
