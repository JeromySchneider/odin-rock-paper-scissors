let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const results = document.querySelector("#results");
    
  if ((playerSelection === "rock" && computerSelection === "scissors") || 
  (playerSelection === "paper" && computerSelection === "rock") || 
  (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++;
  } else if ((playerSelection === "rock" && computerSelection === "paper") || 
  (playerSelection === "paper" && computerSelection === "scissors") || 
  (playerSelection === "scissors" && computerSelection === "rock")) {
    computerScore++;
  }
  results.textContent = `Score: ${playerScore} - ${computerScore}`
  if (playerScore >= 5) {
    results.textContent = "You Won!";
  } else if (computerScore >= 5) {
    results.textContent = "You lost!";
  }
}

function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  return selection[Math.floor(Math.random() * selection.length)]
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.getAttribute("id"), computerPlay());
  });
});