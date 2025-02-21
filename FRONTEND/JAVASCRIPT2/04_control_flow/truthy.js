const userName=[];
if(userName){
    console.log("We have a user name");
}else{
    console.log("No user name");
}

//Falsy values are: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Truthy values are: true, " " , {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity , function(){} , "null", "undefined", "NaN"

if(userName.length===0){
    console.log("Array is empty");
}

const empObj={};
if(Object.keys(empObj).length===0){
    console.log("Object is empty");
}

//Nullish coalescing operator (??) : null undefined
let val1;
//val1=10 ?? 20;
// val1=null ?? 20;
// val1=undefined ?? 20;
// val1=0 ?? 20; //0
val1 =null ?? 10 ?? 20;
console.log(val1);

//Terinary operator
//condition?true:false
const iceTeaPrice=20; 
iceTeaPrice <=10 ? console.log("less than 10"):console.log("more than 10");