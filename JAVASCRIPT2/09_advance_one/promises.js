const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //Db calls
    setTimeout(function(){
        resolve(); //even thought we have written first but it complete async task first of this function then
        //it will be resolved(function 2)
        console.log('Async task is completed');
        
    },1000)
});
promiseOne.then(function(){                 // function 2
    console.log('Promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 is resolved');
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"INOV",email:"inov@example.com"});
    },1000)
})

promiseThree.then(function(user){
     console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({userName:"Raj",passWord:"123@Raj"});
        }
        else{
            reject('Error something went wrong!');
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName;
}).then((userName)=>{
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"));

promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"Javascript",passWord:123})
        }
        else{
            reject('Error : Js went wrong')
        }
    },1000)
});

async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers() {
//     try{
//         const respons=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await respons.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((response)=>{
    console.log(response);
}).catch((error)=>console.log(error));  
