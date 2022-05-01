let invalidSelection = 0;
let round = 1;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    const computerSelection = Math.floor(Math.random() * 3 );
    switch (computerSelection) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            return "Error in computerPlay()";
    }
}

function verifyPlayerSelection(playerSelection) {
    if (!((playerSelection === "ROCK") || (playerSelection === "PAPER") || (playerSelection === "SCISSORS"))) {
        invalidSelection = 1;
        return humanPlay();
    } else {
        return playerSelection;
    }
}

function humanPlay() {
    if (invalidSelection === 0) {
        const playerSelection = prompt("Your selection:").toUpperCase();
        return verifyPlayerSelection(playerSelection);
    } else {
        const playerSelection = prompt("Invalid selection, please choose rock, paper or scissors:").toUpperCase();
        invalidSelection = 0;
        return verifyPlayerSelection(playerSelection);
    }  
}

function singleRound() {
    const playerSelection = humanPlay();
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        round--;
        return "Tie";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerWins++;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerWins++;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection == "PAPER" && computerSelection === "ROCK") {
        playerWins++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerWins++;
        return "You lose! Scissors beat Paper!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerWins++;
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerWins++;
        return "You win! Scissors beat Paper!";
    }
}

function game() {
    for (round = 1; round < 6; round++) {
        console.log(singleRound());
        if (playerWins === 3) {
            return "You won the game!";
        } else if (computerWins === 3) {
            return "You lost the game!";
        }
    }
}

console.log(game());