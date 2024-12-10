function randomPrint(){
    const a=Math.floor(Math.random()*6)+1;
    console.log(a);

    // let guess=prompt("Enter any dice number");
    // while(true){
    //     if(guess=="quit"){
    //         break;
    //     }
    //     if(a==guess){
    //         console.log("You won ! Dice number was:",a)
    //     }else{
    //         guess=prompt("Enter again you lose");
    //     }
    // }
}
// randomPrint();
function avg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
// avg(1,2,3);

function table(a){
    for(let i=1;i<=10;i++){
        console.log(a*i);
    }
}
// table(2);

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
// console.log(getSum(10));

let str=["hi","bye","heloo","!"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet=function(){
    console.log("Hello");
}

// multipleGreet(greet,2);
multipleGreet(function(){console.log("namaste")},100);