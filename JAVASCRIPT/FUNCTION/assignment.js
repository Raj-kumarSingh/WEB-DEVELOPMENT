let arr=[2,3,4,5,6];
let sumOfarray= arr.reduce((sum,el)=>sum+el**2,0);
let avgOfarray=sumOfarray/arr.length;
console.log(sumOfarray);
console.log(avgOfarray);

//Create a new array using the map function whose each element is equal to the original element plus 5
let array=[1,2,3,4,5,6];
/*() let sum=array.map((el)=>
     {
        return el+5;
   })*/
let newArray=array.map(el=>el+5);
console.log(newArray);

let a=["radham","maa","Krishna","ji"];
let array2=a.map(word=>word.toUpperCase());
console.log("Here is a new array with uppercase",array2);

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(arr,...args){
    const doubledArgs=args.map((arg)=>arg*2);
    return [...arr,...doubledArgs];
}
const originalArray=[1,2,3,4];
const result=doubleAndReturnArgs(originalArray,5,6,7);
console.log(result);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
let firstObj={
    name:"Raj",
    roll:123
};
let secondObj={
    name:"Apurva",
    roll:39
};

function mergeObjects(obj1,...obj2){
    return {...obj1,...obj2};
}
let merge=mergeObjects(firstObj,secondObj);
console.log(merge);