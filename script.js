let playerScore = 0;
let computerScore = 0;

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

function game() {
  const objects = ["rock", "paper", "scissors"];
  const howManyRounds = 5;

  for (let i = 0; i < howManyRounds; i++) {
    const player = "rock";
    const computer = getComputerChoice(objects);

    console.log("result - ", playRound(player, computer));
    console.log(playerScore);
    console.log(computerScore);
  }
  console.log("finished");
}

game();
