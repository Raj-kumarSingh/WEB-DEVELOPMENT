const marvelHeroes = ['Iron', 'Thor', 'Hulk', 'Spider', 'Black'];
const dcHeroes= ['Batman', 'Superman', 'Wonder', 'Flash', 'Green'];
// marvelHeroes.push(dcHeroes); //add the dcHeroes array to the end of the marvelHeroes array and the entire will be one element in the marvelHeroes array ,which is 5 index
// console.log(marvelHeroes);
const allHeroes = marvelHeroes.concat(dcHeroes); //concat() -> merge two arrays
console.log(allHeroes); //['Iron', 'Thor', 'Hulk', 'Spider', 'Black', 'Batman', 'Superman', 'Wonder','Flash', 'Green']
//Spread operator
const allHeroes2=[...marvelHeroes,...dcHeroes]; //spread operator -> merge two arrays
console.log(allHeroes2); //['Iron', 'Thor', 'Hulk', 'Spider', 'Black', 'Batman', 'Superman', 'Wonder','Flash', 'Green']
const anotherArray=[1,2,3,[4,5,6],7,[8,9,[10,11,12]]]; //nested array
const flatArray=anotherArray.flat(Infinity); //flat(depth) -> convert nested array to flat array
console.log(flatArray); //[1,2,3,4,5,6,7,8,9,10,11,12]

console.log(Array.isArray("rajSingh")); //false
console.log(Array.from("rajSingh")); //['r','a','j','S','i','n','g','h'] -> convert string to array
console.log(Array.from({name:'raj'})); //Interesing -> [] -> convert object to array but it will be empty

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); //[100,200,300] -> convert variables to array