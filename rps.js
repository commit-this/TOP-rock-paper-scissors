function getComputerChoice() {
    // returns a random choice from rock paper scissors
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(e) {
    // function that takes player and computer choices and returns a string detailing the result

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const result = document.querySelector(".result");
    const displayYourScore = document.querySelector(".playerScore");
    const displayComputerScore = document.querySelector(".computerScore");

    let playerScore = 0;
    let computerScore = 0;
    const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;

    const resultText = playerSelection === "Rock" && computerSelection === "Paper" ? loseMessage
            : playerSelection === "Paper" && computerSelection === "Scissors" ? loseMessage
            : playerSelection === "Scissors" && computerSelection === "Rock" ? loseMessage
            : playerSelection === computerSelection ? "Draw!"
            : winMessage;

    
    if (resultText == winMessage) {
        playerScore += 1;
    } else if (resultText == loseMessage) {
        computerScore += 1;
    }
    if (playerScore == 5) {
        score.textContent = "Congratulations, you won 5 rounds";

    } else if (computerScore == 5) {
        score.textContent = "Sorry, you lost 5 rounds";
    }
    result.textContent = `${resultText}`;
    displayYourScore.textContent = `Your score: ${playerScore}`;
    displayComputerScore.textContent = `Computer score: ${computerScore}`;

}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", playRound));


/******************************************* 

Legacy code from when this was console only

********************************************/

// function game() {
//     // main game function which plays 5 rounds keeping track of score and console logging the result
    
//     // keep track of player and computer scores
//     let playerScore = 0;
//     let computerScore = 0;

//     // loop through 5 rounds and console log each round
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Input rock, paper, or scissors");
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         if (result.includes("Win")) {
//             playerScore++;
//         } else if (result.includes("Lose")) {
//             computerScore++;
//         }
//         console.log(result);
//     }

//     // console log the final score and result
//     if (playerScore > computerScore) {
//         console.log(`You won the game. You won ${playerScore} rounds and lost ${computerScore} rounds`);
//     } else if (playerScore < computerScore) {
//         console.log(`You lost the game. You won ${playerScore} rounds and lost ${computerScore} rounds`);
//     } else {
//         console.log(`The game was a draw. You won ${playerScore} rounds and lost ${computerScore} rounds`);
//     }
// }

// game();
