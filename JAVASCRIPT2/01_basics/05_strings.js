const name="Raj-singh";
console.log(name[0]); //R
/*This creates a primitive string.
typeof gameName will return "string".
Primitive strings are simpler and more efficient.*/
const repoCount=100;
//console.log(name+repoCount+"Value"); //Raj100Value //old way
//console.log(name+(repoCount)+"Value"); //Raj100Value //old way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //new way
const gameName= new String("GTA V"); //we can use new keyword to create a string object
/*This creates a String object.
typeof gameName will return "object".
String objects have additional properties and methods inherited from String.prototype.*/
// console.log(gameName[0]); //G
// console.log(gameName.__proto__);
// console.log(gameName.length); //5
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("V"));

const newString=name.substring(-8,4); //here if we do (-8,4) then it will ignore the negative value and start from 0,here does not include the 4th index
anotherString=name.slice(-8,4); //=>
/* here it will start from the end of the string and go to the 4th index means if we have length of 9 then
it will start from 1st(9-8) index and go to 4th index but it will not include the 4th index and 
if negative value is greater than the length of the string then it will start from 0th index */
console.log(newString);
console.log(anotherString);
const newStringOne="   Raj  ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne);
const url="https://raj.com/raj%20singh";
console.log(url.replace("%20","-"));
console.log(url.includes("raj"));
console.log(name.split("-"));