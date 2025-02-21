//After returning you can't write any code because it will not be executed
function add(a,b){
    const sum=a+b;
    console.log(sum);
    return a+b;
 
}
console.log(add(2,3));

function loginUserMessage(username = "Guest"){
    if(!username){
        return "Please provide a username";
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("John"));
console.log(loginUserMessage());

function calculateCartPrice (val1,val2, ...num){
    return num; //returning the rest of the arguments as an array
}  
console.log(calculateCartPrice(200,400,500,2000)); //output: [500,2000] because 200 and 400 are assigned to val1 and val2 respectively

// const user={
//     username: "John",
//     prices: [200,400,500,2000]
// }
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and prices is ${anyObject.prices}`);
}
handleObject(
{
    username: "Raj",
    prices: [200,400,500,2000]
}
);

const myNewarray=[200,400,500,2000];
function handleArray(arr){
    return arr[0];
}

console.log(handleArray(myNewarray));
