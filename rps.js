function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // 
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
    // main game function which plays 5 rounds keeping track of score and console logging the result
    
    // keep track of player and computer scores
    let playerScore = 0;
    let computerScore = 0;

    // loop through 5 rounds and console log each round
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("Win")) {
            ++playerScore;
        } else if (result.includes("Lose")) {
            ++computerScore;
        }
        console.log(result);
    }

    // console log the final score and result
    if (playerScore > computerScore) {
        console.log(`You won the game. You won ${playerScore} rounds and lost ${computerScore} rounds`);
    } else if (playerScore < computerScore) {
        console.log(`You lost the game. You won ${playerScore} rounds and lost ${computerScore} rounds`);
    } else {
        console.log(`The game was a draw. You won ${playerScore} rounds and lost ${computerScore} rounds`);
    }
}

game();