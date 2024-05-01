"use strict";

function getRandomIntDice() {
  return Number(Math.floor(Math.random() * 6 + 1));
}

const diceNumber = getRandomIntDice();
console.log(typeof diceNumber);

if (diceNumber === 6) {
  document.getElementById("h1-el").innerText = `Congratulations you got 6.`;
} else {
  document.getElementById(
    "h1-el"
  ).innerText = `Number you got is ${diceNumber}.`;
}
