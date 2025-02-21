function SetUsername(username){
    //Complex db calls
    this.username=username
    console.log("Called");
}

function createuser(username,email,password){
    SetUsername.call(this,username)
    this.email=email;
    this.password=password;
}

const coffee=new createuser("Raj","singh@okGoogle","12e3");
console.log(coffee);