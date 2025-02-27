// // let n=5;
// // for ( let i=0;i<n;i++){
// //     console.log("hello",i);
// // }
// // console.log("done");
// // let args=process.argv;
// // for(let i=2;i<args.length;i++){
// //     console.log("hello to",args[i]);
// // }

// // const math=require("./math.js"); 
// // console.log(math);
// // console.log(math.sum(2,3));

// const info=require("./FRUITS");
// console.log(info);

// const figlet=require("figlet");
// figlet("Hello World!", function(err, data) {
//     if(err){
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// }); 

import {sum,mul,g,PI} from "./math.js";
import {generate} from "random-words";
console.log(generate());
console.log(sum(2,3));