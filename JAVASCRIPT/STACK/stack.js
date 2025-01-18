/*Stack is a linear data structure which follows a particular order in which the operations are performed.
The order may be LIFO(Last In First Out) or FILO(First In Last Out)...
There are many real-life examples of a stack. Consider an example of plates stacked over one another in the
canteen. The plate which is at the top is the first one to be removed,i.e. the plate which has been placed at
the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to
follow LIFO/FILO order.
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans= two() + one();
    console.log(ans);
}
three();*/
//Output: 3

//callback is a function that is to be executed after another function has finished executing
//1 st trick = not optimal 
// h1=document.querySelector('h1');    
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextColorChange)nextColorChange();
//     }, delay);
// }

// changeColor('red', 1000, () => {
//     changeColor('orange', 1000, () => {
//         changeColor('yellow', 1000, () => {
//             changeColor('green', 1000, () => {
//                 changeColor('blue', 1000, () => {
//                 });
//             });
//         });
//     }); 
// });

//2nd trick - optimal
h1=document.querySelector('h1');    
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red",1000).then(()=>{
    console.log("red color was changed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was changed");
    return changeColor("grren",1000);
})
.then(()=>{
    console.log("green color was changed");
    return changeColor("blue",1000)
})
.then(()=>{
    console.log("blue color was changed");
})



//This function savetoDb is an example of a callback-based asynchronous function. to avoid this callback hell we use promises
/*function savetoDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>5){
            success();
        }else{
            failure();
        }
}

savetoDb(
    "Raj has saved the data",
    ()=>{
        console.log("Data has been saved successfully");
        savetoDb(
            "raj again saved the data",
            ()=>{
                console.log("Data has been saved successfully");
                savetoDb(
                    "raj 3rd time again saved the data",
                    ()=>{
                        console.log("Data has been saved successfully");
                    },
                    ()=>{
                        console.log("Data has not been saved successfully");
                    }
                )
            },
            ()=>{
                console.log("Data has not been saved successfully");
            }
        )
    },
    ()=>{
        console.log("Data has not been saved successfully");
    }
);8*/
 //Promise is an object representing the eventual completion or failure of an asynchronous operation.
//A promise is a proxy for a value not necessarily known when the promise is created.
//It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

/*function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>5){
            resolve("success : data has been saved");
        }else{
            reject("failure : data has not been saved");
        }
    })
// }

/*Promises has 3 states: 1)Pending 2)Fulfilled 3)Rejected
1)Pending: initial state, neither fulfilled nor rejected.
2)Fulfilled: meaning that the operation completed successfully.
3)Rejected: meaning that the operation failed.*/

/*it has methods like then() and catch() which are used to handle the resolved and rejected promises respectively.
then() method is used to handle the resolved promise and catch() method is used to handle the rejected promise.*/
//let request=savetoDb("Raj has saved the data"); //request = promise object
/*savetoDb("Raj has saved the data").then((result)=>{
    console.log("data1 saved");
    console.log("result of promse:",result);
    return savetoDb("hello world");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promse:",result);
    return savetoDb("hi nandu");
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promse:",result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise:",error);
});*/