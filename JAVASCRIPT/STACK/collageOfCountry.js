let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("#country").value;
    let collarr=await getCollages(country);
    show(collarr);
});

async function getCollages(country){
    try{
        let res=await axios.get(url+country);
        return res.data;

    }
    catch(e){
        console.log("error caught",e);
        return [];
    }
}
function show(collarr){
    let list=document.querySelector("#result");
    list.innerText="";
    for(col of collarr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.append(li);
    }
}
