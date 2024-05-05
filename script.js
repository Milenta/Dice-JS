"use strict";

var btn = document.querySelector("#twofuns");
btn.addEventListener("click", method1);

function method1() {
  function getRandomIntDice() {
    return Number(Math.floor(Math.random() * 6 + 1));
  }
  const diceNumber = getRandomIntDice();
  if (diceNumber === 6) {
    document.getElementById("h3-el").innerText = `Congratulations you got 6.`;
  } else {
    document.getElementById(
      "h3-el"
    ).innerText = `Number you got is ${diceNumber}.`;
  }
}
