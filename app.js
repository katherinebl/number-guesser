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
        setMessage(`Please, enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if (guess === winningNum) {
        //Disable input
        input.disabled = true;
        //Change border color
        input.style.borderColor = 'green';
        //Set win message
        setMessage(`${winningNum} is correct, you win... Yay! :)`, "green");

    } else {
        //Change border color
        input.style.borderColor = 'red';
        //Set lose message
        setMessage(`Sorry, try again you have ${guessesLeft - 1} guesses left`, "red");
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        input.disabled = true;
        message.textContent = "Game over :(";
    }
});

//Set message 
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

