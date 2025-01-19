/*
// let score=true;

// console.log(typeof(score));
// let valueInNumber=Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 or false => 0

let isLoggedin="";
console.log(Boolean(isLoggedin));

//0 => false
//1 => true
//"" => false
//" " => true
//"abc" => true

let someNumber=23;
let stringNumber=String(someNumber);
console.log(stringNumber,"dataType became:",typeof stringNumber);
//23 => "23" */

// *************************** Operation ***************************
let value=3;
let negvalue=-value;
console.log(negvalue);

//cosole.log(3+4); //7
//console.log(3-4); //-1
//console.log(3*4); //12
//console.log(3/4); //0.75
//console.log(3%4); //3
//console.log(3**4); //81

let str1="Raj";
let str2=" Singh";
console.log(str1+str2); //Raj Singh
console.log("1"+3); //13
console.log(1+"3"); //13
console.log("1"+3+4); //134, it is happening because of left to right associativity,that tell us to evaluate the left side first and then right side.
console.log(1+3+"4"); //44, it is happening because of left to right associativity,that tell us to evaluate the left side first and then right side.
console.log(1+3*4%2); //1
console.log((1+3)*4%2); //0