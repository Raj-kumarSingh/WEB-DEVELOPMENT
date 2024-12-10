// Event Bubling
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("lis was clicked");
//     });
// };

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
})

//Event Delegation -> with the help of eve

ul.addEventListener("click",function(event){
    //console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        // console.log(listItem);
        console.log("deleted");
    }
});

// doing it,it's only allow us to delete element of under html file
/*let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
};*/