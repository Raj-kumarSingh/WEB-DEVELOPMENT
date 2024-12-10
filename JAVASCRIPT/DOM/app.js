// let smallImages=document.getElementsByClassName("oldImg");
/* let firstIndex=document.getElementsByClassName("oldImg")[0].src;
// let secondIndex=document.getElementsByClassName("oldImg")[1].src;
// let thirdIndex=document.getElementsByClassName("oldImg")[2].src;
   console.log(firstIndex);*/
/*for(let i=0;i<smallImages.length;i++){
    console.log(document.getElementsByClassName("oldImg")[i].src);
}*/
/* for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="assets/spiderman_img.png";
//     console.log(`Value of image number ${i} is changed`);
  }*/

//Query Selectors--> Allow us to use any CSS selector
        //this syntax only select first element
/*console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));  //why we are using # here  ->  to target an element by its ID.
console.dir(document.querySelector(".oldImg"));/*
        //this syntax select all element
/*console.dir(document.querySelectorAll(".oldImg"));  
console.dir(document.querySelectorAll("div a"));*/

/*let heading=document.querySelector("h1");
console.log(heading);
heading.innerHTML=`<u> ${heading.innerText}</u>`;

let img=document.querySelector('img');
// -> undefined
img
// -> <img src=​"assets/​spiderman_img.png" id=​"mainImg">​
img.getAttribute('id');
// -> 'mainImg'
img.setAttribute('id','spiderManImg');
// -> undefined
img
// -> <img src=​"assets/​spiderman_img.png" id=​"spiderManImg">​
img.setAttribute('src','assets/creation_2.jpeg');
// -> undefined
img.getAttribute('class');
// -> null = because current image has not class
img.setAttribute('class','images');
// -> undefined = image class has been seted here
img.getAttribute('class');
// -> 'images' = checking what is class name and we get 'images' as we seted
let hding=document.querySelector('h1');
// -> undefined
hding.style.color='green';
// -> 'green'
hding.style.backgroundColor='yellow';
// -> 'yellow' */

// let links=document.querySelectorAll('.box a');

/*for(let i=0;i<links.length;i++){
    links[i].style.color='Red';
}*/
/*for(link of links){
    link.style.color='green'; //we can manupulate only inline style , we'nt manupulate css style (outline style)
}
let heading=document.querySelector('h1');
// -> undefined
heading.classList.add('green');
// -> undefined
heading.classList.add('underline');
// -> undefined
heading.classList.remove('green');
// -> undefined
heading.setAttribute('class','greem');
// -> undefined
heading.setAttribute('class','green');
// -> undefined
heading.classList.contains('underline');
// -> false
heading.classList.contains('green');
// -> true
heading.classList.toggle('green');
// -> false
heading.classList
// -> DOMTokenList [value: '']
heading.classList.toggle('green');
// -> true
heading.classList.toggle('underline');
// -> true
let box=document.querySelector('.box')
// -> undefined
box.classList
// -> DOMTokenList ['box', value: 'box']
box.classList.add('yellowBG');
// -> undefined
box.classList.add("yellowBG");
// -> undefined
box.classList.add("yellowBg");
// -> undefined
let h4=document.querySelector("h4");
// -> undefined
h4.children;
// -> HTMLCollection []
let box=document.querySelector('.box');
// -> undefined
box.children
// -> HTMLCollection(2) [h4, ul]
box.childElementCount;
// -> 2
let ul=document.querySelector('ul');
// -> undefined
ul.parentElement
// -> <div class=​"box yellowBG yellowBg">​…​</div>​
ul.children
// -> HTMLCollection(3) [li, li, li]
ul.children[0];
// -> <li>​…​</li>​
ul.children[1];
// -> <li>​…​</li>​
ul.children[2];
// -> <li>​…​</li>​
ul.children[2].previousElementSibling;
// -> <li>​…​</li>​
ul.children[1].nextElementSibling;
// -> <li>​…​</li>​
let img=document.querySelector('img')
// -> undefined
img.previousElementSibling.style.color='Red';
// -> 'Red' */

let para1=document.createElement('p');
para1.innerText="Hey i am red!";
document.querySelector('body').append(para1);
para1.classList.add('red');

let h3=document.createElement('h3');
h3.innerText="Hey i am blue!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div=document.createElement('div');
let h1=document.createElement('h1');
let para2=document.createElement('p');

h1.innerText="i'm in a div";
para2.innerText='Me too';
div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector('body').append(div);