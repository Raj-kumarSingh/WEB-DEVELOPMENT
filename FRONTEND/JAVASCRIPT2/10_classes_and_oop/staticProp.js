
class User{
    constructor(userName){
        this.userName=userName;
    }
    static logMe(){
        console.log(`UserName : ${this.userName}`);
        return this.userName;
    }
    static createId(){
        const { randomUUID } = require('crypto');
        return randomUUID().substring(2, 15);
    }
}
const Raj=new User("RajSingh");
//! console.log(Raj.createId()); // here it will show error bcz createId() has become static and static does'nt allow to access outside of the class......

class Teacher extends User{
    constructor(userName,email){
        super(userName);
        this.email=email;
    }
}

const user1=new Teacher("Raju","fasa@gmail.com");
console.log(user1.logMe());