const accountId=123456;
let accountEmail="rajs@gmial.com";
var accountPassword="12345";
accontCity="Bangalore";

//accountId=1234567; // error, cannot reassign a const variable .
/*
    prefer not to use var keyword
    because of issues in block scope and function scope. use let instead.
*/
console.log(accountId,accountEmail,accountPassword,accontCity)
console.table([accountId,accountEmail,accountPassword,accontCity]);

//!JAVASCRIPT is single threaded and synchronous language but it is non-blocking and asynchronous because of the event loop and callback queue
//!in simple words, it can do multiple things at the same time without blocking the main thread