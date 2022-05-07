let invalidSelection = 0;
let round = 1;
let playerWins = 0;
let computerWins = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const matchResult = document.querySelector('.text');
const score = document.querySelector('.score');
const resetButton = document.getElementById('reset-btn');
let playerSelection;

rock.addEventListener('click', e => {
    playerSelection = e.target.textContent;
    console.log(doGame());
})

paper.addEventListener('click', e => {
    playerSelection = e.target.textContent;
    console.log(doGame());
})

scissors.addEventListener('click', e => {
    playerSelection = e.target.textContent;
    console.log(doGame());
})

resetButton.addEventListener('click', () => {
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    matchResult.style.fontSize = '20px';
    matchResult.textContent = "";
    resetButton.style.display = 'none';
    resetCounts();
    writeScore();
})

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

// function verifyPlayerSelection(playerSelection) {
//     if (!((playerSelection === "ROCK") || (playerSelection === "PAPER") || (playerSelection === "SCISSORS"))) {
//         invalidSelection = 1;
//         return humanPlay();
//     } else {
//         return playerSelection;
//     }
// }

// function humanPlay() {
//     if (invalidSelection === 0) {
//         const playerSelection = prompt("Your selection:").toUpperCase();
//         return verifyPlayerSelection(playerSelection);
//     } else {
//         const playerSelection = prompt("Invalid selection, please choose rock, paper or scissors:").toUpperCase();
//         invalidSelection = 0;
//         return verifyPlayerSelection(playerSelection);
//     }  
// }

function writeScore() {
    score.textContent = `${playerWins} - ${computerWins}`;
}

function doGame() {
    singleRound();
    writeScore();
}

function resetCounts() {
    playerWins = 0;
    computerWins = 0;
}

function hideButtons() {
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    matchResult.style.fontSize = '26px';
    resetButton.style.display = 'block';
}

function gameResult() {
    if (playerWins === 5) {
        matchResult.textContent = "You won";
        hideButtons();
    } else if (computerWins === 5) {
        matchResult.textContent = "You lose";
        hideButtons();
    }
}


function singleRound() {
    // const playerSelection = humanPlay();
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        round--;
        matchResult.textContent = "Tie";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerWins++;
        matchResult.textContent = "You lose! Paper beats Rock!";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerWins++;
        matchResult.textContent = "You win! Rock beats Scissors!";
    } else if (playerSelection == "PAPER" && computerSelection === "ROCK") {
        playerWins++;
        matchResult.textContent = "You win! Paper beats Rock!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerWins++;
        matchResult.textContent = "You lose! Scissors beat Paper!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerWins++;
        matchResult.textContent = "You lose! Rock beats Scissors!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerWins++;
        matchResult.textContent = "You win! Scissors beat Paper!";
    }
    gameResult();
}

// function game() {
//     for (round = 1; round < 6; round++) {
//         matchResult.textContent = singleRound();
//         if (playerWins === 3) {
//             return "You won the game!";
//         } else if (computerWins === 3) {
//             return "You lost the game!";
//         }
//     }
// }

// console.log(game());