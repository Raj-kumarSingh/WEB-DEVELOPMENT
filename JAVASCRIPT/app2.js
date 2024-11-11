let msg="  hello Raj  ";
// msg.trim();
// console.log(msg);
// let str1="Random text";
// console.log(str1.toLowerCase());
// console.log(str1);
// console.log(str1.toUpperCase());
// console.log(str1.indexOf("R"));
// msg=msg.trim().toUpperCase();
// console.log(msg);
// console.log(str1.slice(-2));
// console.log(str1.slice(1));
// console.log(str1.slice(0,10));
// console.log(str1.repeat(2));
// console.log(str1.replace("Ran","randd"));
// console.log(str1.trim().toLowerCase());
// let str="apna college";
// let newStr=str.slice(5,12).replace("l","t");
// let newStr=str.slice(5,12).replace("l","t").replace("l","t");
// console.log(newStr);


//Arrays
// let info=["RajSingh",23,90.9];
// console.log(info[0][0]);
// console.log(info[0].length);
// info[0]=["RajKumar"];
// console.log(info)
// let cars=["audi","BMD","mercedes"];
// cars.push("Toyota");
// console.log(cars);
// cars.pop();
// console.log(cars);
// console.log(cars.unshift("Ferrari"));
// console.log(cars.shift());

// PQ 1
// let months=["January","July","March","August"];
// months.shift();
// months.shift();
// months.unshift("June");
// months.unshift("July");
// console.log(months)

// PQ 2
// let months=["January","July","March","August"];
// months.splice(0,2,"July","June")

// let lang=["c","c++","Java","Html","JavaScript","css","python","typescript"];
// lang.reverse().indexOf("JavaScript");

//PQ 3
let arr=[7,9,0,-2];
let n=3;
arr.slice(0,n);
arr.slice(arr.length-n);
let str="Raj";
if(str==0){
    console.log("String is Empty");
}
else{
    console.log("string is not empty");
}
let ind=2;
if(str[ind]==str[ind].toLowerCase()){
    console.log("Ya it's Lower");
}
else{
    console.log("Not");
}
let str2=" Suno n Ram Kahani   ";
console.log(`This is Original String :${str2}`);
console.log(`After removing unwanted space ${str2.trim()}`);
let arr2=[123,321,43,"Raj"];
item=123;
if(arr2.indexOf(item)!=-1){
    console.log("Ya it's exist in array");
}
else{
    console.log("It's does'nt exist in array");
}