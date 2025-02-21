const score= 100;
console.log(score);
const balance=new Number(1000);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(typeof balance); // here it is Number object because we have used new keyword..
const otherNumber=123.8934;
console.log(otherNumber.toPrecision(4));

//++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.ceil(4.1));//if we have 4.1 then it will return 5 because even if we have decimal value greater than 0.1 then it will return the next integer value (before the decimal value)..
console.log(Math.floor(4.9)); //if we have 4.9 then it will return 4 because even if we have decimal value greater than 0.9 then it will return the same integer value which is before the decimal value
console.log(Math.round(4.5)); //if we have 4.5 then it will return 5 because it will round off the value to the nearest integer value

console.log(Math.random());//it will return a random number between 0 and 1
console.log(Math.random()*100+1);
console.log(Math.floor(Math.random()*100)+1); //it will return a random number between 1 and 100 and because of floor it will not include 100 and it avoid the decimal value
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //it will return a random number between 10 and 20 and because of floor
