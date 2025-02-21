//Singleton onject
// const tinderUser=new Object();
const tinderUser={};

tinderUser.id="123abc"
tinderUser.name="John"; 
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regualrUser={
    email:"someone@gmail.com",
    fullname:{
        usersfullName:{
            firstName:"John",
            lastName:"Doe"
        }
    }
}
// console.log(regualrUser.fullname);
// console.log(regualrUser.fullname.usersfullName.firstName);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};

//const obj4=Object.assign({},obj1,obj2,obj3);// 1st trick to merge objects using assign (not simple)
const obj4={...obj1,...obj2,...obj3};// 2nd trick to merge objects using spread operator (simple)
console.log(obj4);
const users=[
    {
        id:1,
        email:"some@gmail.com"
    },
    {
        id:2,
        email:"somo@gmail.com"
    },
    {
        id:3,
        email:"sdsd@gmail.com"
    },
    {
        id:4,
        email:"dsa@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it will convert objects in return an array of keys
console.log(Object.values(tinderUser)); //it will convert objects in return an array of values
console.log(Object.entries(tinderUser)); //it will convert objects in return an array of arrays
console.log(tinderUser.hasOwnProperty("isLogged"));

const course={
    courseName:"Javascript",
    price:100,
    courseDuration:"3 months",
    courseInstrucor:"John Doe"
}

//course.courseInstrucor;
const {courseInstrucor : instructor }=course; //destructuring, it helps us to geting value of a key more easily and quickly without typing the whole object name
console.log(instructor);

//API DATA IN JSON object
{
    "id":1,
    "name":"John",
    "email":"someOne@gmail.com"
}

//API DATA IN ARRAY
[
    {
        "id":1,
        "name":"John",
        "email":"someOne@gmail.com"
    },
    {
        "id":2,
        "name":"John",
        "email":"someOne@gmail.com"
    },
    {
        "id":3,
        "name":"John",
        "email":"dda@g.com"
    }
]