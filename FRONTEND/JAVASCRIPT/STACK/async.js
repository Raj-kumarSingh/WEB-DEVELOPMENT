
//async function always returns a promise and that promise is resolved with the value returned by the function
async function greet() {
    throw "Something went wrong";
    return 'Hello World!';
}

greet()
    .then((result) => {
        console.log("Promis was resolved");
        console.log("result was : ",result);
    })
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("error was : ",error);
    });

let demo=async()=>{
    return 5;
};

//await keyword is used to wait for the promise to resolve.

h1=document.querySelector('h1');    
function changeColor(color, delay) {    
    let num=Math.floor(Math.random()*5)+1;
    if(num>3){
        reject("promise rejected");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed");
        }, delay);
    });
}

async function nextColorChange(){
    try{
        await changeColor("red",1000);
        console.log("red color was changed");
        await changeColor("orange",1000);
        console.log("orange color was changed");
        await changeColor("green",1000);
        console.log("green color was changed");
        await changeColor("blue",1000);
        console.log("blue color was changed");}
    catch(error){
        console.log("error caught");
        console.log(error);
    }
}