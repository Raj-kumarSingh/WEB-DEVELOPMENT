/*const user={
    username: "John",
    price: 200,
    welcomeMessage: function(){
       console.log(`${this.username} , welcome to our website`);
    }
}
user.welcomeMessage();
user.username="Raj";
user.welcomeMessage();

console.log(this); //output: {} because this keyword is pointing to the global object and in node it is pointing to the empty object
// console.log(this===window); //output: false because node global object(strict method) is empty object but in browser it is window object  

function sayHello(){
    console.log(this);
}
sayHello();  //output : many things will be shown because we are calling the this keyword under the function
// scope and which comes under node global object(here nonestrict method)

function coffee(){
    let userName="Vaibhav";
    console.log(this.userName);
}
coffee(); //output: undefined because this keyword is pointing to the global object and userName is not a property of the global object
*/
//Arrow functions ,Arrow functions are introduced in ES6 and they are the most popular feature of ES6

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
//const addTwo=(num1,num2)=>num1+num2;  //Implicit return ,just remove the curly braces and return keyword
const addTwo=(num1,num2)=>(num1+num2);  //Implicit return ,just remove the curly braces and return keyword
console.log(addTwo(2,3)); //output: 5
// For object return
const add=(a,b)=>({username:"raj"});
console.log(add()); //output: {username: "raj"}