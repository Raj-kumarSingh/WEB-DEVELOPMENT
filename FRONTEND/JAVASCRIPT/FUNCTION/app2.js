const student={
    name: "Raj Singh",
    age: 21,
    math: 98,
    eng: 87,
    math: 93,
    phy: 89,
    getAvg(){
        console.log(this);
        let avg=(this.phy+this.math+this.eng)/3;
        console.log(`${this.name} got average marks is = ${avg}`);
    }
}
console.log("Hello");
console.log("Raj singh");
try{
    console.log(a);
}catch(error){
    console.log(error);
    console.log("Caught an error a is not defined");
}
console.log("Call aa gya");


//Arrow function
const sum=(a,b)=>{
    console.log(a+b);
};
sum(2,3);

//Implicit return in arrow function
const cube=(n)=> n*n*n;

//setTimeout function
// console.log("Hi there ");
// setTimeout(()=>(
//     console.log("It's raj singh")
// ),4000);

// console.log("How is the day going");

//setInterval
let id=setInterval(()=>(
    console.log("Sun n u can do this...")
),4000);

console.log(id);

let id2=setInterval(()=>(
    console.log("Ya I can...")
),4000);

console.log(id2);

//For stoping the interval Function..
clearInterval(id);
clearInterval(id2);
