const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resetBtn = document.querySelector(".resetBtn");
const gameOverContainer = document.querySelector(".gameOver-container");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");
const objects = ["rock", "paper", "scissors"];
const howManyRounds = 5;
const howManyRoundsElement = document.querySelector(".howManyRounds");
howManyRoundsElement.innerText = howManyRounds;

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

rockBtn.addEventListener("click", (e) => {
  playRound("rock", getComputerChoice(objects), e);
});

paperBtn.addEventListener("click", (e) => {
  playRound("paper", getComputerChoice(objects), e);
});

scissorsBtn.addEventListener("click", (e) => {
  playRound("scissors", getComputerChoice(objects), e);
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playRound(playerSelection, computerSelection, event) {
  showPlayerSelection(event);
  await sleep(1000);
  showComputerSelection(computerSelection);
  await sleep(1000);
  checkWhoWon();

  function checkWhoWon() {
    if (playerSelection === computerSelection) {
      return;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
    } else {
      computerScore++;
    }
    updateScore();
  }

  removeSelections();
  isGameOver();
}

function updateScore() {
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
}

function isGameOver() {
  if (playerScore + computerScore >= howManyRounds) {
    gameOverContainer.style.display = "flex";
  }
}

function resetGame() {
  gameOverContainer.style.display = "none";
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

function showPlayerSelection(event) {
  const card = event.target.closest(`.card`);
  card.classList.add("playerActive");
}

function showComputerSelection(target) {
  const element = "." + target;
  const card = document.querySelector(element);
  card.classList.add("computerActive");
}

function removeSelections() {
  rockBtn.classList.remove("playerActive", "computerActive");
  paperBtn.classList.remove("playerActive", "computerActive");
  scissorsBtn.classList.remove("playerActive", "computerActive");
}

resetGame();
