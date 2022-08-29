const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const resetBtn = document.querySelector("resetBtn");

const gameOverText = document.querySelector(".gameOver-text");

const playerScoreElement = document.querySelector("playerScore");
const computerScoreElement = document.querySelector("computerScore");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const howManyRounds = 5;

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
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "player won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "player won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "player won";
  } else {
    computerScore++;
    return "computer won";
  }
}

function game(howManyRounds) {
  const objects = ["rock", "paper", "scissors"];

  for (let i = 0; i < howManyRounds; i++) {
    const player = "rock";
    const computer = getComputerChoice(objects);

    console.log("result - ", playRound(player, computer));
    console.log(playerScore);
    console.log(computerScore);
  }
  console.log("finished");
}

game(howManyRounds);
