let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
//TRICK 1
// fetch(url)
// .then((response)=>{
//     console.log("resolved",response);
//    return response.json();
// })
// .then((data1)=>{
//     console.log("Data1 : ",data1.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// }))
// .then((data2)=>{
//     console.log("Data : ",data2.fact);
// })
// .catch((error)=>{
//     console.log("rejected",error);
// });

//TRICK 2 (using async and await)
// async function fetchData(){
//     try{
//         let res=await fetch(url);
//         let data= await res.json();
//         console.log(data.fact);

//         let res2=await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log("error caught",e);
//     }
//     console.log("Fetching data completed");
// }
// fetchData();

//TRICK 3 (using axios)
//query selector is used to select the first element that matches the specified selector
//for example, if we have a button in our html file, we can select it using querySelector("button") and then it will return the first button element.
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{//event listener is used to listen to the event and then perform the action
    console.log("button was clicked");
    let fact=await fetchData();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
});
async function fetchData(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("error caught",e);
        return "Not fact found";
    }   
}
let btn2=document.querySelector("#dog");
btn2.addEventListener("click",async ()=>{//event listener is used to listen to the event and then perform the action
    let link=await fetchDogData();
    let img=document.querySelector("#dog-image");
    img.setAttribute("src",link); //setAttribute is used to set the attribute of the element and here we are setting the src attribute of the img element to the link
    console.log(link);
});
async function fetchDogData(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("error caught",e);
        return "/";
    }   
}
fetchData();

//Sending headers with api request
const url3="https://official-joke-api.appspot.com/random_joke";
async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}};//headers is an object that contains the key value pairs of the headers that we want to send with the request
        let res=await axios.get(url3,config);
        console.log(res.data.setup + " - " + res.data.punchline);
    }
    catch(e){
        console.log(e);
    }
}
getJokes();