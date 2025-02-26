const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));

    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }

    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a number within the valid range")
    }

    else{
        attempts += 1;
        if(guess < answer){
            window.alert("Number is too low, try again!")
        }
        else if(guess > answer){
            window.alert("Number is too high, try again!")
        }
        else{
            window.alert(`Congrats, you've guessed correctly, the answer was ${guess}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}