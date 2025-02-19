class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password}@okNisha`;
    }
    set password(value){
        this._password = value;
    }
}
const Raj=new User("r@gmail.com",'raju');
console.log(Raj.email);