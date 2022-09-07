import { disableMultipleClick, enableMultipleClick } from "./utils.js";
import { cards } from "./index.js";

const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");
const howManyRounds = 5;
const howManyRoundsElement = document.querySelector(".howManyRounds");
howManyRoundsElement.innerText = howManyRounds;
const gameOverContainer = document.querySelector(".gameOver-container");

function showPlayerSelection(event) {
  const card = event.target.closest(`.card`);
  card.classList.add("playerActive");
}

function showComputerSelection(card) {
  card.classList.add("computerActive");
}

function removeSelections() {
  enableMultipleClick();
  cards.forEach((card) => {
    card.classList.remove("playerActive", "computerActive");
  });
}

function showResult(computerChoice, whoWon) {
  const resultContainer = document.querySelector(".result-container");
  const resultText = resultContainer.querySelector(".result-text");
  const resultValue = resultContainer.querySelector(".result-value");

  resultContainer.style.display = "flex";
  resultText.innerText = `COMPUTER CHOSE ${computerChoice.dataset.gameType.toUpperCase()}`;
  resultValue.innerText = `${whoWon}`;
}

function hideResult() {
  const resultContainer = document.querySelector(".result-container");
  resultContainer.style.display = "none";
}

function hideGameOverContainer() {
  gameOverContainer.style.display = "none";
}

function showGameOverContainer() {
  gameOverContainer.style.display = "flex";
}

export {
  hideGameOverContainer,
  showGameOverContainer,
  showPlayerSelection,
  showComputerSelection,
  removeSelections,
  showResult,
  hideResult,
  playerScoreElement,
  computerScoreElement,
  howManyRounds,
};
