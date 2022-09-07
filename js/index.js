import { getComputerChoice, resetGame, playRound } from "./game.js";
import { disableClick, disableMultipleClick } from "./utils.js";

const cards = document.querySelectorAll(".card.game");
const resetBtn = document.querySelector(".resetBtn");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (!disableClick) {
      disableMultipleClick();
      playRound(card.dataset.gameType, getComputerChoice(cards), e);
    }
  });
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

resetGame();

export { cards };
