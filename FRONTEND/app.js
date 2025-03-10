// const stu1={
//     name:"Raj",
//     age:25,
//     marks:99
// };

// const stu2={
//     name:"Singh",
//     age:21,
//     marks:99
// };
// const stu3={
//     name:"Nisha",
//     age:21,
//     marks:99
// };

// let arr=[1,2,3]
// arr.sayHello=()=>{
//     console.log('hello!, i am arr'); 
// }

//!FACTORY FUNCTION
// function PersonMaker(name , age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1=PersonMaker('RAJ',19); //copy different memory takes
// let p2=PersonMaker('Singh',21); //copy diff memory takes

//!New Operator -> Constructors = does'nt return anything & st with capital letter

// function Person(name , age ){
    
//         this.name=name,
//         this.age=age,
//         console.log(this);
// }
// Person.prototype.talk=function(){
//     console.log(`Hi , my name is ${this.name}`);
// }
// let p1=new Person("Raj",21);
// let p2=new Person("Singh",23);

// class Person{ //no need to intialize talk function by using prototype every time when we create new object it will be created automatically
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi my name is ${this.name}`);
//     }
// }
// let p1=new Person("Raj",21);
// let p2=new Person("Singh",23);

// ANCHOR INHERITANCE
class Person{
    constructor(name,age){
        console.log("This is a Person class constructor");
        this.name=name,
        this.age=age
    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}

class Students extends Person{
    constructor(name,age,marks){
        console.log("This is a student class constructor");
        super(name,age); // Parents class constructor is being called
        this.marks=marks;
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        console.log("This is a Teacher class constructor");
        super(name,age); // Parents class constructor is being called
        this.subject=subject;
    }
}