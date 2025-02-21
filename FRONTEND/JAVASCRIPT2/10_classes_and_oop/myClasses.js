class User{
    constructor(userName , email , password){
        this.userName=userName;
        this.email=email;
        this.password=password;
    } //Jaise hee class se new keyword intialize hota hai waise hee constructor called ho jata hai...
    encryptPassword(){
        return `${this.password}abc` ;
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}` ;
    }
}
const chai=new User("Raj","raj@gmial.com","Singh@123");
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// function User(userName,password,email){
//     this.userName=userName;
//     this.password=password;
//     this.email=email;
// }

// User.prototype.encryptedPassword=function(){
//     return `${this.password}abc`;
// }

// User.prototype.changeUserName=function(){
//     return `${this.userName.toUpperCase()}`;
// }
// const coffee=new User("BanKuchh","basdsadsa@12","raj@gmail.com");
// console.log(coffee.changeUserName());
// console.log(coffee.encryptedPassword());