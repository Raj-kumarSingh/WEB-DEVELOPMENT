/*let btn=document.querySelector('button');
let p=document.querySelector('p');
let h1=document.querySelector('h1');
let h3=document.querySelector('h3');

function changedColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
btn.addEventListener('click',changedColor);
p.addEventListener('click',changedColor)
h1.addEventListener('click',changedColor);
h3.addEventListener('click',changedColor);*/

/*let inp=document.querySelector('input');
inp.addEventListener('keydown',function(event){
    console.log("key = ",event.key);
    console.log("key = ",event.code);
    console.log("Key was pressed");
});

inp.addEventListener('keyup',function(event){
    console.log("Key was released");
});*/

// let form=document.querySelector('form');
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // console.log("form submitted");

//     /*let user=this.elements[0];  //document.querySelector("#user");
//     let pass=this.elements[1];  //document.querySelector('#pass');
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi${user.value}, your password is set to ${pass.value}`);*/
// });

/*let user=document.querySelector("#user");
user.addEventListener("change",function(event){
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value =  ",this.value);
});*/

let inp=document.querySelector("#text");
let p=document.querySelector('p');
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
})