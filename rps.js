function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;


    return playerSelection === "Rock" && computerSelection === "Paper" ? loseMessage
            : playerSelection === "Paper" && computerSelection === "Scissors" ? loseMessage
            : playerSelection === "Scissors" && computerSelection === "Rock" ? loseMessage
            : playerSelection === computerSelection ? "Draw!"
            : winMessage;
}

function game() {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));