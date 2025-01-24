const coding=['js','py','rb','cpp'];
// coding.forEach(function(programming){
//     console.log(programming);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,array)=>{
//     console.log(item,index,array);
// })

const myCoding=[
    {languageName:"Javascript",
        languageFilename:"js", 
    },
    {languageName:"Python",
        languageFilename:"py",

    },
    {languageName:"Ruby",
        languageFilename:"rb",
    },
    {languageName:"python",
        languageFilename:"py",
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})