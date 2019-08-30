'use-strict';

/* GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose 
- Let player choose to play again */

// Game values
let min = 4,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    input = document.getElementById('guess-input'),
    submit = document.getElementById('guess-btn'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
submit.addEventListener('click', function () {
    let guess = parseInt(input.value);

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please, enter a number between ${min} and ${max}`);


    } else if (guess === winningNum) {
        message.textContent = "Yay! you win :)";
    } else {
        message.textContent = `Sorry, try again you have ${guessesLeft} guesses left`;
        guessesLeft--;
    }
});

//Set message 
function setMessage(msg) {
    message.textContent = msg;
}

