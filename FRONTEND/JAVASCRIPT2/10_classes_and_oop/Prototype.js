// let myName="Raj     ";
// console.log(myName.truelength);

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

}

Object.prototype.raj=function(){
    console.log(`Raj is present in all objects 🥹 ...`);
}
Array.prototype.heyRaj=function(){
    console.log(`This is only being connected with Array 😃`)
}
// heroPower.raj();
// myHeros.raj(); 
// myHeros.heyRaj();
// heroPower.heyRaj(); // here showing error bcz of it is object and protoType is being connected with Array...

//Inheritance
const user={
    name:"chai",
    email: "chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiOrCode        "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`The length is : ${this.trim().length}`)
}

anotherUsername.truelength();
"RajSingh  ".truelength();