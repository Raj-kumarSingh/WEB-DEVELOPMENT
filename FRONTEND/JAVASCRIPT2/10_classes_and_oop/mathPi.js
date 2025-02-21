const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

// console.log(Math.PI);
// const a=Math.PI=4; // prints 4 becuause Math.PI is getting assigned with 4 and returning 4 to a but Math.PI is
//not being changed 
// Math.PI=4; // for ex to not being changed
// console.log(Math.PI); // it's not overWriting give me 3.14...

const chai={
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    OrderChai:function(){
        console.log("Code fat gya 🤖")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable : false  // bcz here we had assigned enumerable false so in the last we are not 
    //getting name because it is not being iterated
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key , value] of Object.entries(chai)) {
    if(typeof value!== 'function')
        console.log(`${key} : ${value}`);
}