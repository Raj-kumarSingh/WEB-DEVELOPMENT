function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function creatUser(username,score){
    this.username=username;
    this.score=score;
}

creatUser.prototype.increment=function(){
    this.score++;
}

creatUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}

const chai=new creatUser("chai",25);
const tea=new creatUser("tea",250);

chai.printMe(); // here it will give TypeError: Cannot read properties of undefined (reading 'printMe') if we do'nt decalre the object 
// without new keyWord