let randomNumber = Math.floor(Math.random()* 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess(){
    const userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = "Previous Guesses:";
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.color = "green";
        lastResult.style.backgroundColor = "black";
        lastResult.style.textTransform = "uppercase";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if (guessCount === 10){
        lastResult.textContent = "!!! GAME OVER !!!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong!!";
        lastResult.style.color = 'red';
        if (userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was to low";
        }
        else if (userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was to high";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetResult = document.querySelectorAll(".result p");
    for (const resetResul of resetResult){
        resetResult.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.textContent = "";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}