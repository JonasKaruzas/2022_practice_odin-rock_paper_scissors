const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const resetBtn = document.querySelector(".resetBtn");
const gameOverText = document.querySelector(".gameOver-text");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");
const objects = ["rock", "paper", "scissors"];
const howManyRounds = 5;

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice(objects));
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice(objects));
});

scissorBtn.addEventListener("click", () => {
  playRound("scissor", getComputerChoice(objects));
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function getComputerChoice(objects) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return objects[getRandomInt(0, objects.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
  } else {
    computerScore++;
  }

  updateScore();
  isGameOver();
}

function updateScore() {
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
}

function isGameOver() {
  if (playerScore + computerScore === howManyRounds) {
    gameOverText.style.display = "flex";
  }
}

function resetGame() {
  gameOverText.style.display = "none";
  playerScore = 0;
  computerScore = 0;
  updateScore();
}
