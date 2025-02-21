//Immediately Invoked Function Expression(IIFE)
// IIFE is a function that is executed right after it is created.

(function chai(){
    console.log(`DB CONNECTED`);
})();
//the problem of global scope pollutin can be solved by IIFE

((name)=>{
    console.log(`Hello ${name}`);
})("Thakur Saheb");