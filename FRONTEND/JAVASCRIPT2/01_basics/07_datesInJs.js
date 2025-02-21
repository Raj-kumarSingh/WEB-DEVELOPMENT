//Dates
let myDate = new Date();
// console.log(myDate);    //it will return the current date and times
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString()); 
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// it is date object
let myCreatedDate = new Date(2021,01,01,11,30,0); //it will return the date and time of 2021-02-01 11:30:00 because,
//  month starts from 0 when we use it as a number but if we use it as a string then it will start from 1
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = new Date();
console.log(myTimeStamp); //it will return the current date and time
console.log(myCreatedDate.getTime()); //it will return the time in milliseconds from 1970-01-01 00:00:00 to the date and time we have provided
console.log(Math.floor(Date.now()/100)); //it will return the current time in milliseconds from 1970-01-01 00:00:00 
//to the current date and time and because of floor it will avoid the decimal value or it will return the current time in centiseconds
console.log(Math.floor(Date.now()/1000)); //it will return the current time in seconds from 1970-01-01 00:00:00 to the current date and time and because it is divided by 1000 it will return the current time in seconds
let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()); //it will return the month of the date and times
console.log(newDate.getDate()); //it will return the date of the date and times
console.log(newDate.getFullYear()); //it will return the year of the date and times
console.log(newDate.getDay()); //it will return the day of the date and times
console.log(newDate.getHours()); //it will return the hours of the date and times

const weekDay=newDate.toLocaleString('default', { 
    weekday: 'long'
});//
console.log(weekDay);