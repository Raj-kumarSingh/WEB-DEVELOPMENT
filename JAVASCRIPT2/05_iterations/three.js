//for of loop

const arr=[1,2,3,4,5,6,7,8,9,10];
for (const num of arr) {
    // console.log(num);    
}

const greetings="Hello World";
for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);
}
//Map objects are collections of key/value pairs and here key are unique, value can be repeated and map object
//  iterated by key and value pair   
//key can be any value and value can be any value

const map=new Map();
map.set('name','John');
map.set('age',25);
map.set('country','USA');
map.set('name','John'); //key is unique so it will not be added again
console.log(map);

//it will print key value together
for (const key of map) {
    // console.log(key);
}
//it will print key and value separately
for (const [key,value] of map) {
    // console.log(key,":-",value)
}

const myObject={
    'game1':"GTA V",
    'game2':"FIFA 21",
    'game3':"Call of Duty"
}
// Not working on object
// for (const [key,value] of myObject) {
//     console.log(key,":-",value)
// }