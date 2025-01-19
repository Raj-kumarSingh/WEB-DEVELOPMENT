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
let myFunction=function add(a,b){
    return a+b;
}

myFunction(2,3); //5
console.log(typeof score); //number
console.log(typeof y); //object //it is a bug in JavaScript