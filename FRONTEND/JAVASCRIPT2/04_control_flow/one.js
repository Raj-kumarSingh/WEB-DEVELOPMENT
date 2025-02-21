//if
const isuseerLoggedIn = true;
const temperature = 31;

if(temperature===30)
{
    console.log("Temperature is 30");
}
else{
    console.log("Temperature is not 30");
}
console.log("End of the program");

// <,>,<=,>=,==,===,!=,!==,&&,||,!
//if else if
const score=80;
if(score>=90){
    let grade="A";
    console.log(`Your grade is ${grade}`);
}
// console.log(`Your grade is ${grade}`); //checking whether grade is block scoped or not if yes then it should throw error
const balance=100;
if(balance>=100) console.log("You have balance"),console.log("You can shop");
else console.log("You dont have balance"),console.log("You cant shop");

if(balance<100){
    console.log("You dont have balance");
}
else if(balance>=100 && balance<=200){
    console.log("You have balance");
}
else{
    console.log("You have enough balance");
}

const userLoggedIn=true,dibited=true,loogedInFromGoogle=true,loogedInFromFacebook=false;
if(userLoggedIn && dibited && 2==3){
    console.log("User is logged in and debited");
}
if(loogedInFromGoogle || loogedInFromFacebook){
    console.log("User is logged in from Google or Facebook");
}
else{
    console.log("User is not logged in");
}


