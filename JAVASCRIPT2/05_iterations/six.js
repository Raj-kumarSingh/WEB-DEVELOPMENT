const coding =[ 'js', 'py', 'rb', 'cpp' ];
const values=coding.forEach((item)=>{''
    console.log(item);
    return item;  //it will not return anything BECAUSE forEach does not return anything
})
console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];
// // const newNums=myNums.filter((num)=>num>4) // don't need to use return keyword
// const newNums=myNums.filter((num)=>{
//     return num>4} // need to use return keyword if we are using curly braces(scope)
// )
// const newNums=[];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);
const books = [
   {
        title: "The Great Gatsby",
        genre: "fiction",
        publish: 1292,
        edition: 2004
    },
   {
        title: "To Kill a Mockingbird",
        genre: "fiction",
        publish: 1960,
        edition: 1999
    },
    {
        title: "1984",
        genre: "dystopian",
        publish: 1949,
        edition: 2003
    },
    {
        title: "Moby-Dick",
        genre: "adventure",
        publish: 1851,
        edition: 2001
    }
];

let userBooks=books.filter((bk)=> bk.genre === 'adventure')
userBooks=books.filter((bk)=>{return bk.publish>=1905 && bk.edition>=2000})
console.log(userBooks)