const user={
    userName: "Raj",
    loginCount:8,
    signedIn:true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(this.userName);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
    this.userName=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings=function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this;
}

// const userOne=User("Raj",12,true);
// // console.log(userOne);
// const userTwo=User("Singh",14,false); 
// console.log(userOne); // Overwriting the function context because we have created UserTwo object without new keyWord

const userOne=new User("Raj",12,true);
const userTwo= new User("Singh",14,false); 
console.log(userOne);
console.log(userTwo); //see 😍 here it is not being overWrite because when we use new keyword for creating object every 
// variable get their own memory space...

