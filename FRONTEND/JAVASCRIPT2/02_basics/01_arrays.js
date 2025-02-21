//array
const myArray=[0,1,2,3,4,5]; //array of numbers
const myHeroes=['Batman','Superman','Spiderman','Ironman']; //array of strings
const myMixedArray=[1,'Batman',true,3.14]; //mixed array -> numbers, strings, boolean, float, array can have different data types in one array
const myArray2 = new Array(1,2,3,4,5); //another way to create an array
console.log(myArray[1]);

//++++++++ Array Methods +++++++++++++
// myArray.push(6); //add element to the end of the array
// myArray.push(7);
// console.log(myArray);
// myArray.pop(); //remove the last element of the array
// console.log(myArray);
// myArray.unshift(0); //add element to the beginning of the array
// console.log(myArray);
// myArray.shift(); //remove the first element of the array
/*console.log(myArray.includes(3)); //check if the array includes the element
console.log(myArray.indexOf(3)); //return the index of the element
console.log(myArray.join()); //convert array to string
console.log(myArray.join('')); //convert array to string without commas
console.log(myArray.join(' ')); //convert array to string with space
console.log(typeof myArray);
console.log(Array.isArray(myArray)); //check if the variable is an array
console.log(myArray.reverse()); //reverse the array */

// Slice,Splice,Concat,Filter,Map,Reduce
console.log('A',myArray);
const myn1=myArray.slice(1,3); //slice(start,end) -> return the elements from start to end-1
console.log(myn1);
console.log('B',myArray);
const myn2=myArray.splice(1,3); //splice(start,deleteCount) -> remove the elements from start to deleteCount-1
console.log('C',myArray);
console.log(myn2);
// the difference between slice and splice is that slice does not change the original array, but splice does

