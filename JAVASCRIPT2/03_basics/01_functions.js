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