randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#sub')
const userInp=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;

let playGame= true;
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInp.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid number');
    }
    else if(guess<1){
        alert('please enter a number more than 1');
    }
    else if(guess>100){
        alert('please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Game over. random number was ${randomNumber}`);
        }
    }
}

function checkGuess(guess){

}
function displayGuess(guess){

}
function displayMessage(message){

}
function endGame(){
    
}
function newGame(){

}
