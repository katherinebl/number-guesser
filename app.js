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
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    input = document.getElementById('guess-input'),
    guessBtn = document.getElementById('guess-btn'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(input.value);

    //Validate
    if (guess < min || guess > max || isNaN(guess)) {
        setMessage(`Please, enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if (guess === winningNum) {
        //Won - Game Over
        gameOver(true, `${winningNum} is correct, you win... Yay! :)`);

    } else {

        //Wrong number 
        guessesLeft -= 1;

        //Lost - Game Over
        if (guessesLeft === 0) {
            gameOver(false, `You lost, the corect number was ${winningNum}`);

        } else {
            // Game continues - answer wrong

            // Tell user its the wrong number
            setMessage(`Sorry, ${guess} is not correct, you have ${guessesLeft} guesses left!`, "red");

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

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
    guessBtn.value = "Play again!";
    guessBtn.className += "play-again";

}

//Get random number
function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

//Set message 
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}
