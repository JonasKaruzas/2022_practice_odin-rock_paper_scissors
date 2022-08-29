const objects = ["rock", "paper", "scissors"];

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
    return "player won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "player won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "player won";
  } else {
    return "computer won";
  }
}

const player = objects[0];
console.log("player - ", player);

const computer = getComputerChoice(objects);
console.log("computer - ", computer);

console.log("result - ", playRound(player, computer));
