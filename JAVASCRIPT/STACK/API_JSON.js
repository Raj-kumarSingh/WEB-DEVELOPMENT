//API means Application Programming Interface, it is a set of rules that allows one piece of software application to talk to another.
//  In this case, we are going to use the API to get the data from the server and display it on the web page.
//it's allow user to interact with the application

//JSON means JavaScript Object Notation
//It is a lightweight format for storing and transporting data of API of any server.
//It is easy for humans to read and write.

let jsonRes=
'{"fact":" Approximately 1/3 of the cat owners think their pets are able to read their minds.","length": 78}';
let AlljsonObj=JSON.parse(jsonRes);//noteparse() method is used to convert a JSON string to a JavaScript object.
console.log(AlljsonObj.fact);

let student={
    name : "Raj",
    marks : 90,
};
let jsonStr=JSON.stringify(student);//stringify() method is used to convert a JavaScript object to a JSON string.
console.log(jsonStr);

//Tools like Postman, Insomnia and hoppscotch etc. are used to test the API.
//APIs are used to connect the frontend and backend of the application.