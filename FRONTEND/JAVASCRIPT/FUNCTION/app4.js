//forEach loop
let arr=[1,2,3,4,5];
arr.forEach((el)=>{
    console.log(el);
});

arr.forEach(function(el){
    console.log(el);
});

let print=function(el){
    console.log(el);
};
arr.forEach(print);

arr2=[{
    name : "Raj Singh",
    marks : 98
},{
    name : "Megha Singh",
    marks : 94
}
];
function Student(el){
    console.log(el.marks);
};
arr2.forEach(Student);
//Or
arr2.forEach((student)=>{
    console.log(student.marks);
});

//Map function
let gpa=arr2.map((el)=>{
    return el.marks/10;
});

//filer function => return filtered object after filtering something

let nums=[1,2,4,5,6,7,8,10,12];
let ans=nums.filter((num)=>num%2==0
);
let even=[2,4,,6,8];
//every function => return true if every element of array gives true for some function else return false..
let check=even.every((num)=>num%2==0);
//some function is opposite of every
let checks=even.some((num)=>num%2!=0);

//reducer method
let number=[1,2,4,5,6];
let finalVal=number.reduce((res,el)=>{
    console.log(res);
    return res+el});
console.log(finalVal);

//Finding max and min value of array
let array=[2,4,5,6,8,10];
let max=array.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});

let a=array.every((num)=>num%10==0);
let min=array.reduce((min,el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});

//Default parameter
function func(a,b=9){
    return a+b;
}
func(8);

//Spread -> exapand an iterable into multiple values
console.log(...arr);

let odd=[1,3,5,7,9];
let eve=[2,4,6,8,10];
let num2=[...even,...odd];

const data={
    email:"ironman@gmail.com",
    pass:"iron@123"
};
const dataCopy={
    ...data,id:123, country:"America"
};

//argument ex->
function sum(){
    console.log(arguments);
    console.log(arguments.length)   ;
}

//Rest arg
function suming(...args){
    return args.reduce((s,el)=>s+el);
}

function minimum(msg,...args){
    console.log(msg);
    return args.reduce((m,el)=>{
        if(m>el)
            return el;
        else{
            return m;
        }
    });
};

//Destructuring-> storing values of array into multiple variables
let names=["Raj","Apurva","Vaibhaw","Kanishk"];
let [winner,runnerup,...other]=names;

//Destructuring object
let student2={
    names:"Raj",
    age:21,
    class:"Bca",
    subjects:["Maths","English","C","Python"],
    username:"raj@gmail.com",
    password:1234
};

let {username:user,password:pass,city:place="Bengaluru"}=student2;
