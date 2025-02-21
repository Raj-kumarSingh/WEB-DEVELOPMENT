//Example1
const student={ //it is Parent and it's scope is global here watever thing's will come same thing will come in arro function
    name : 'Raj',
    marks : 90,
    prop : this , //Global Function
    //Example1
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks : () => {
        console.log(this);
        this.marks; //Parent's Scope --> Window
    },
    //Example2
    getInfo1 : function(){
        setTimeout( () =>{    //Here setTimeout is is Inbuilt function but arrow take information from his parent's
            console.log(this); //Student
        },2000);
    },
    getInfo2: function(){
        setTimeout( function(){ //here SetTimeout is inbuilt function and here setTimeout is calling object 
            console.log(this);
        },2000);
    }
};

//PQ1
const square= (n) => n*n;
console.log(square(4));

//PQ2
let id=setInterval(function(){
    console.log("Hello world");
},2000);

setTimeout(function(){
    clearInterval(id);
    console.log("ClearInterval ran");
},10000);