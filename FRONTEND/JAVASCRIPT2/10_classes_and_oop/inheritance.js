class User{
    constructor(userName){
        this.userName=userName;
    }
    loggMe(){
        console.log(`Username is ${this.userName}`)
    }
}
class Teacher extends User{
    constructor(userName,email,password){
        super(userName);
        this.email=email;
        this.password=password;
    }
    addCourses(){
        console.log(`A new course was added by ${this.userName}`)
    }
}

const user2=new Teacher("Raj","adnsd@gmail.com","123");
const user1=new User("Singh");
user2.addCourses();
user1.loggMe();

console.log(user1 instanceof Teacher); //in short, instanceof is for checking object-constructor relationships,
//  not object-object relationships. The right-hand operand must be a constructor (class or function).