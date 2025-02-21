//Singleton
//object.create()

//object literal
const mySym=Symbol("key1");

const JsUser={
    name : "Raj",
    "full name": "Raj Singh",
    [mySym]: "value1",
    age: 25,
    location: "USA",    
    email: "raj@google.com",
    isLoggedIn: false,
    lastLoginDays:['Monday','Tuesday','Wednesday']
}

// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.email);
// JsUser.email="raj@MS.com";
// console.log(JsUser.email);
// Object.freeze(JsUser);
// JsUser.email="raj@dsjd.com";
// console.log(JsUser.email);

JsUser.greeting=function(){
    console.log("Hello, "+this.name);
}
console.log(JsUser.greeting());
JsUser.greetingTwo=function(){
    console.log("Hello, "+this["full name"]);
}
console.log(JsUser.greetingTwo());