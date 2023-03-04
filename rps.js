function getComputerChoice() {
    // returns a random choice from rock paper scissors
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(e) {
    // compares player and computer choices and displays the result as text on the html page

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();

    const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;

    const resultText = playerSelection === "Rock" && computerSelection === "Paper" ? loseMessage
            : playerSelection === "Paper" && computerSelection === "Scissors" ? loseMessage
            : playerSelection === "Scissors" && computerSelection === "Rock" ? loseMessage
            : playerSelection === computerSelection ? "Draw!"
            : winMessage;

    // prevent game from continuing after 5 rounds
    if (gameStatus.textContent) return;

    if (resultText === winMessage) {
        playerScore += 1;
    } else if (resultText === loseMessage) {
        computerScore += 1;
    }
    
    if (playerScore === 5) {
        gameStatus.textContent = "Congratulations, you won 5 rounds";

    } else if (computerScore === 5) {
        gameStatus.textContent = "Sorry, you lost 5 rounds";
    }
    
    result.textContent = `${resultText}`;
    displayYourScore.textContent = `Your score: ${playerScore}`;
    displayComputerScore.textContent = `Computer score: ${computerScore}`;
}

function reset(e) {
    // resets scores and clears text on the html page
    
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    displayComputerScore.textContent = "";
    displayYourScore.textContent = "";
    gameStatus.textContent = "";
}

const result = document.querySelector(".result");
const displayYourScore = document.querySelector(".playerScore");
const displayComputerScore = document.querySelector(".computerScore");
const gameStatus = document.querySelector(".win");
const resetButton = document.querySelector(".reset");
const buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener("click", playRound));
resetButton.addEventListener("click", reset);


