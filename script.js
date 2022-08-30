const cards = document.querySelectorAll(".card");
const resetBtn = document.querySelector(".resetBtn");
const gameOverContainer = document.querySelector(".gameOver-container");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");
const howManyRounds = 5;
const howManyRoundsElement = document.querySelector(".howManyRounds");
howManyRoundsElement.innerText = howManyRounds;

let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let disableClick = false;

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (!disableClick) {
      disableClick = true;
      playRound(card.dataset.gameType, getComputerChoice(cards), e);
    }
  });
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function getComputerChoice(cards) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return cards[getRandomInt(0, cards.length)];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function checkWhoWon(playerSelection, computerSelection) {
  computerSelection = computerSelection.dataset.gameType;

  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Player won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Player won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Player won";
  } else {
    computerScore++;
    return "Computer won";
  }
}

async function playRound(playerSelection, computerSelection, event) {
  showPlayerSelection(event);
  await sleep(1000);
  showComputerSelection(computerSelection);
  await sleep(1000);

  showResult(
    computerSelection,
    checkWhoWon(playerSelection, computerSelection)
  );
  await sleep(3000);
  hideResult();
  updateScore();
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

function showComputerSelection(card) {
  card.classList.add("computerActive");
}

function removeSelections() {
  disableClick = false;
  cards.forEach((card) => {
    card.classList.remove("playerActive", "computerActive");
  });
}

resetGame();

function showResult(computerChoice, whoWon) {
  const resultContainer = document.querySelector(".result-container");
  const resultText = resultContainer.querySelector(".result-text");
  const resultValue = resultContainer.querySelector(".result-value");

  resultContainer.style.display = "flex";
  console.log(computerChoice);
  resultText.innerText = `COMPUTER CHOSE ${computerChoice.dataset.gameType.toUpperCase()}`;
  resultValue.innerText = `${whoWon}`;
}

function hideResult() {
  const resultContainer = document.querySelector(".result-container");
  resultContainer.style.display = "none";
}
