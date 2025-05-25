const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOST!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOST!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOST!";
                break;
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // This is to reset the color class after each game, or else it will be stuck to the first color
    // without refreshing the page
    resultDisplay.classList.remove("greenText", "redText", "greyText");

    switch(result){
        case "YOU WIN!":
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.add("greenText");
            break;
        
        case "YOU LOST!":
            computerScore += 1;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add("redText");
            break;

        case "IT'S A TIE!":
            resultDisplay.classList.add("greyText");
            break;
    }
}
