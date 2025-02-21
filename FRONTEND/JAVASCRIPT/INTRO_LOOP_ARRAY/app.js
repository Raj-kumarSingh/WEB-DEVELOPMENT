let A=10;
let B=10;
console.log(`Total is = ${A+B}`);

// Arithmetic operators
let a=10;
let b=12;
console.log(`Add is : ${a+b}`);
console.log(`Sub is : ${a-b}`);
console.log(`Mul is : ${a*b}`);
console.log(`Div is : ${b/a}`);
console.log(`Remainder is : ${b/a}`);
console.log(`Power is : ${a**b}`);

// Condition Statements
let  age=29;
console.log("Before if statements");
if(age>18){
    console.log("You can vote");
    console.log("you can derive");
    let a=2;
    console.log(5 *a);
}
if(age<18){
    console.log("you can'nt vote");
}
console.log("after if statements");

// Traffic Light
let color="yellow";
if(color==="red"){
    console.log("!Stop");
}
if(color==="yellow"){
    console.log("Wait");
}
//POPCORN PRICE
let size="XL";
if(size==="XL"){
    console.log("Price is 250");
}
else if(size==="L"){
    console.log("Price is 200");
}
else{
    console.log("Price is 100");
}

// Good String or not
let str="apple";
if(str[0]==="a" && str.length>3){
    console.log("Good String");
}else{
    console.log("It's not good string");
}

// Switch case
let day=9;
switch(day){
    case 1: console.log("Monday");
    break;
    case 1: console.log("Tuesday");
    break;
    case 1: console.log("Wednesday");
    break;
    case 1: console.log("Thrusday");
    break;
    case 1: console.log("Friday");
    break;
    case 1: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default:
        alert("Not valid day!");
        console.log("Not valid");
}

Alert
alert("Something is wrong!");
let Firstname=prompt("Enter your name");
console.log(Firstname);
let lastname=prompt("enter your roll number");
console.log(lastname);
let msg=`Welcome ${Firstname+ lastname}`;
alert(msg);
console.log(msg);
