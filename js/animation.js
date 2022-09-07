import { cards } from "./index.js";

function scaleAnimation() {
  const addScale = (card) => {
    console.log("1");
    card.classList.add("scale");
  };

  const removeScale = (card) => {
    console.log("2");
    card.classList.remove("scale");
  };

  cards.forEach((card) => {
    const anim = new Promise((res, rej) => {
      setTimeout(() => {
        addScale(card);
      }, 500);

      setTimeout(() => {
        removeScale(card);
      }, 1000);
    });
  });
}

export { scaleAnimation };
