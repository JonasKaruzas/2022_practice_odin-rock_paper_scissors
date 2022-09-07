import { cards } from "./index.js";
import {
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
} from "./ui.js";
import { scaleAnimation } from "./animation.js";
import { sleep } from "./utils.js";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(cards) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return cards[getRandomInt(0, cards.length)];
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

function resetGame() {
  hideGameOverContainer();
  playerScore = 0;
  computerScore = 0;
  updateScore();

  scaleAnimation();
}

function updateScore() {
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
}

function isGameOver() {
  if (playerScore + computerScore >= howManyRounds) {
    showGameOverContainer();
  }
}

export { getComputerChoice, resetGame, playRound, howManyRounds };
