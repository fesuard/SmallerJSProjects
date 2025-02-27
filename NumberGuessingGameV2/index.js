const minNumInput = document.getElementById("minNumInput");
const maxNumInput = document.getElementById("maxNumInput");
const guessedNum = document.getElementById("guessedNum");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const numHint = document.getElementById("numHint");

let running = false; 
let minVal, maxVal, answer;
let tries = 0;
let guessedNumbers = [];

guessBtn.onclick = function (){
    minVal = Number(minNumInput.value.trim());
    maxVal = Number(maxNumInput.value.trim());

    if (isNaN(minVal) || isNaN(maxVal)){
        numHint.textContent = "Please enter valid numbers for the game parameters.";
        return;
    }
    if (!minNumInput.value.trim() || !maxNumInput.value.trim()){
        numHint.textContent = "You can't leave the parameters blank.";
        return;
    }
    if (minVal >= maxVal){
        numHint.textContent = "Min number can't be the same or bigger than Max number.";
        return;
    }

    if (!running){
        answer = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
        running = true;
        tries = 0;
        guessedNumbers = [];
        guessedNum.textContent = "No numbers guessed yet";
        numHint.textContent = "Game started! Enter a guess.";
    }

    let guess = Number(guessInput.value.trim());

    if (isNaN(guess)){
        numHint.textContent = "Your guess must be a number.";
        return;
    }
    if (guess < minVal || guess > maxVal){
        numHint.textContent = `The number has to be between ${minVal} and ${maxVal}.`;
        return;
    }
    if (guessedNumbers.includes(guess)){
        numHint.textContent = "You've already guessed this number, try a different one!";
        return;
    }

    guessedNumbers.push(guess);
    guessedNum.textContent = guessedNumbers.join(", ");

    tries += 1;

    if (guess < answer){
        numHint.textContent = "Too low, try a bigger number.";
    } else if (guess > answer){
        numHint.textContent = "Too high, try a lower number.";
    } else{
        numHint.textContent = `Congratulations! You guessed the number in ${tries} tries.`;
        running = false;
    }

    guessInput.value = "";
}