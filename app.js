'use-strict';

/* GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose 
- Let player choose to play again */

// Game values
let min = 1,
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
        //WON Game over
        gameOver(true, `${winningNum} is correct, you win... Yay! :)`);

    } else {
        //Wrong number 
        guessesLeft--;
        setMessage(`Sorry, ${guess} is not correct, you have ${guessesLeft} guesses left!`, "red");
        //Game over
        if (guessesLeft === 0) {
            gameOver(false, `You lose, the corect number was ${winningNum}`);
        }
    }


});

//Game over 
function gameOver(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";

    //Disable input
    input.disabled = false;
    //Change border color
    input.style.borderColor = color;
    //Set win message
    setMessage(msg, color);

    //Play again?
    submit.value = "Play again!";
    submit.className += "play-again";
    submit.addEventListener('click', reloadPage);

}



//Set message 
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

//Reload Page
function reloadPage() {
    document.location.reload(true);
}