// let n=prompt("Enter the no");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n)
// {
//     console.log(i);
// }
//Favourate movies
// const fmovies="Aavtar";
// let guess=prompt("Guess my favourate movies");
// while(guess!=fmovies){
//     if(guess=="quit"){
//         console.log("u quit the match");
//         break;
//     }
//     guess=prompt("Please try again");
// }
// if(guess==fmovies){
//     console.log("Congrates you won");
// }
// else{
//     console.log("You quit the match");
// }
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
//     if(i==3){
//         break;
//     }
// }
// //For of Loops
// let fruits=["Mango","Banana","Litchi"];
// for(fruit of fruits){
//     console.log(fruit);
// }
//Assignment
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
let number=287152;
let count=0;
let copy=number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
console.log(count);
let sum=0;
while(copy>0){
    let digit=copy%10;
    sum=sum+digit;
    copy=Math.floor(copy/10);
}
console.log(parseInt(sum));
let no=5;
let fact=1;
for(let i=1;i<=no;i++){
    fact=fact*i;
}
console.log(fact);
let array=[2,5,10,4,2,7,1,9];
let largest=0;
for(let i=0;i<array.length;i++){
    if(largest<array[i]){
        largest=array[i];
    }
}
console.log(`The largest number of ${array} is ${largest}`);