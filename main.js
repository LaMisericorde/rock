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
        return "Incorrect selection";
    } else {
        return playerSelection;
    }
}

function askPlayer() {
    const playerSelection = prompt("Your selection:").toUpperCase();
    console.log(verifyPlayerSelection(playerSelection));
}

askPlayer();