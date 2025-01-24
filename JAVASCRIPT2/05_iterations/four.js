const myObject={
    js:"Javascript",
    py:"Python",
    rb:"Ruby",
    cpp:"C++"
}
for (const key in myObject) {
    //    console.log(`${key} shortcut is for ${myObject[key]}`);s
}
const programming=["Javascript","Python","Ruby","C++"];
for (const key in programming) {
    // console.log(`${key} is ${programming[key]}`);
}

const map=new Map();
map.set('name','John');
map.set('age',25);
map.set('country','USA');
for(const key in map){
    console.log(key);
}