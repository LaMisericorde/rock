let invalidSelection = 0;

function computerPlay() {
    const computerHand = Math.floor(Math.random() * 3 );
    switch (computerHand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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

console.log(humanPlay());