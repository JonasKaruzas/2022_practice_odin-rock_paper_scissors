const objects = ["rock", "paper", "scissors"];

function getComputerChoice(objects) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return objects[getRandomInt(0, objects.length)];
}

console.log(getComputerChoice(objects));
