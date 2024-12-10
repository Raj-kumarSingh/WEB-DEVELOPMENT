/*et btns=document.querySelectorAll("button");
for(btn of btns){
    
    // btn.onmouseenter=function(){
    //     console.log("You enter a button");
    // }
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("u double clicked me");
    });
    // console.dir(btn);
}
function sayHello(){
    alert("Hello!");
} 
function sayName(){
    alert("Raj Singh doing..");
}  */
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector('h3');
    let rc=generateRandomColor();
    h3.innerText=rc;

    let div=document.querySelector('div');
    div.style.backgroundColor=rc;
    console.log("Color updated");
});

function generateRandomColor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
    
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
