import { cards } from "./index.js";

async function scaleAnimation() {
  let delay = 100;

  const addScale = (card) => {
    card.classList.add("scale");
  };

  const removeScale = (card) => {
    card.classList.remove("scale");
  };

  cards.forEach((card, idx) => {
    setTimeout(() => {
      addScale(card);
      setTimeout(() => {
        removeScale(card);
      }, 200);
    }, delay);
    delay += 50;
  });
}

export { scaleAnimation };
