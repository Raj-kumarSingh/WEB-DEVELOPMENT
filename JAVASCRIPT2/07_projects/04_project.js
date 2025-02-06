
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt'); // Fixed ID
const userInp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult'); // Fix: Use lastResult instead
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInp.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('❌ Please enter a valid number');
    } else if (guess < 1) {
        alert('⚠️ Enter a number more than 1');
    } else if (guess > 100) {
        alert('⚠️ Enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`💀 Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("🎉 You guessed it right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("⬇️ Number is TOO LOW!");
    } else {
        displayMessage("⬆️ Number is TOO HIGH!");
    }
}

function displayGuess(guess) {
    userInp.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInp.value = '';
    userInp.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;

    // Fix: Add event listener after appending to DOM
    document.querySelector('#newGame').addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `10`;
        userInp.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
