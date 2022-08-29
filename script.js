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

rockBtn.addEventListener("click", (e) => {
  playRound("rock", getComputerChoice(objects), e);
});

paperBtn.addEventListener("click", (e) => {
  playRound("paper", getComputerChoice(objects), e);
});

scissorBtn.addEventListener("click", (e) => {
  playRound("scissor", getComputerChoice(objects), e);
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

function playRound(playerSelection, computerSelection, event) {
  showPlayerSelection(event);

  setTimeout(() => {
    showComputerSelection(computerSelection);
    checkWhoWon();
  }, 800);

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
    removeSelections();

    isGameOver();
  }
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

function showPlayerSelection(event) {
  console.dir(event.target);
  event.target.classList.add("playerActive");
}

function showComputerSelection(target) {
  const element = "." + target;
  const card = document.querySelector(element);
  card.classList.add("computerActive");
}

function removeSelections() {
  rockBtn.classList.remove("playerActive", "computerActive");
  paperBtn.classList.remove("playerActive", "computerActive");
  scissorBtn.classList.remove("playerActive", "computerActive");
}
