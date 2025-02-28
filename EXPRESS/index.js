const express=require('express');
const app=express();

console.dir(app);
let port=8000;
app.listen(port,()=>{
    console.log(`app is listening on port${port}`);
})

app.get('/',(req,res)=>{
    res.send('hello i am root path');
})
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username,id}=req.params;
    let htmlStr=`<h1>Hello ${username} your id is ${id}</h1>`;
    res.send(htmlStr);
})
app.get('/search',(req,res)=>{
    let {q}=req.query;res.send(`These are the search results for query:${q}`);
})sd
    
// app.get('/apple',(req,res)=>{
//     res.send('This is apple page');
// })
// app.get('/banana',(req,res)=>{
//     res.send('This is banana page');
// })
// app.get('/kivi',(req,res)=>{
//     res.send('This is kivi page');
// })
// app.get('*',(req,res)=>{
//     res.send('Sorry 😭 this page does not exist');
// })
// app.post('/',(req,res)=>{
//     res.send('You contacted root path using POST');
// })
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send('This is basic response');
//     // res.send({
//     //     name : 'Raj',
//     //     age:21,
//     //     city:'Bengaluru'
//     // })
//     res.send('<h1>fruits</h1> <ul><li>apple</li><li>banana</li></ul>');
// })