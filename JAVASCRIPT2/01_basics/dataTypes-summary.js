//Primitive Data Types
// 7 types => undefined, null, boolean, string, symbol, number, object
const score=100; //number
const a=100.2; //number
const name="John"; //string
const isTrue=true; //boolean
let x; //undefined
let y=null; //null
const id=Symbol("123"); //symbol
const anotherId=Symbol("123"); //symbol
console.log(id===anotherId); //false
const bigNumber=32321232323123213n; //bigint

//Non-Primitive Data Types(Reference Data Types)
//Array, Object, Function
const numbers=[1,2,3,4,5]; //array
let person={name:"John", age:30}; //object
let myFunction=function add(a,b){ //object function
    return a+b;
}

console.log(myFunction(2,3)); //5
console.log(typeof score); //number
console.log(typeof y); //object //it is a bug in JavaScript

//+++++++++++++++++++++++++++++++++ MEMORIES ++++++++++++++++++++++++++++++++++++++++++++
//STACK(PRMITIVE DATA TYPES)  |  HEAP(NON-PRIMITIVE DATA TYPES)
//STACK DIAGRAM
//|-------------------|
//|                   |
//|                   |
//|                   |
//|                   |
//|                   |
//|                   |
let myYoutubeChannel="CodeWithAwa";
let anothername=myYoutubeChannel;
anothername="John";
console.log(myYoutubeChannel); //CodeWithAwa
console.log(anothername); //John
let userOne={
    email:"user@google.com",
    upi:"user@okhdfc"
};
let userTwo=userOne;
userTwo.email="raj@gmail.com";
console.log(userOne.email); //
console.log(userTwo.email); //
//Diagram of how does they get stored in STACK and HEAP
//..STACK                         ..HEAP
//|-------------------|         |-------------------|
//|                   |         |                   |
//|  userTwo  ------->|-------> |  email:raj@google |
//|  userOne  ------->|-------> |  upi:user@okhdfc  |
//|  myYoutubeChannel |         |                   |
//|  anothername      |          -------------------
//|  myYoutubechannel |

//In stack if changes are made in one variable then it will not affect the other variable.
//In heap if changes are made in one variable then it will affect the other variable.   //This is called as SHALLOW COPY
//as both the variables are pointing to the same memory location. that is why changes made in one variable will affect the other variable.