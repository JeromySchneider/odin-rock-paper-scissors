function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  return selection[Math.floor(Math.random() * selection.length)]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
    
  if ((playerSelection === "rock" && computerSelection === "scissors") 
  || (playerSelection === "paper" && computerSelection === "rock") 
  || (playerSelection === "scissors" && computerSelection === "paper")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return "player";
  } else if ((playerSelection === "rock" && computerSelection === "paper") 
  || (playerSelection === "paper" && computerSelection === "scissors") 
  || (playerSelection === "scissors" && computerSelection === "rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return "computer";
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return "tie";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick rock, paper or scissors: ");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} to ${computerScore}.`);
  } else if (playerScore < computerScore) {
    console.log(`You lost! ${playerScore} to ${computerScore}.`);
  } else {
    console.log(`You tied! ${playerScore} to ${computerScore}.`)
  }
}

game();