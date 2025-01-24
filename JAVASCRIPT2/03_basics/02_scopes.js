var c=50; //global scope
if(true){
    //block scope
    let a=10;
    const b=20;
    var c=30; // c=30,we can declare this also 
}
 
// console.log(a);
// console.log(b);
console.log(c); //output: 30 , because var c=30 is in the block scope and it is overriding the global scope c=50
// that's why it is not recommended to use var keyword because it can be redeclared and reassigned that's leads
// to confusion and bugs in the code

//! Note: global scopes are different from browser global scopes that's why we can't access the variables declared in the browser

console.log(addOne(5)); //Here we are getting an output because of hoisting
function addOne(num){
    return num+1;
}
//what is hoisting? 
console.log(addTwo(5)); //here we are getting an error because of hoisting,hoisting is not applicable for function expressions
const addTwo=function(num){
    return num+2;
}