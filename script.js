"use strict";

var btn = document.querySelector("#twofuns");
btn.addEventListener("click", rollDice);
let count = 0;
let disp = document.getElementById("display");

function rollDice() {
  function getRandomIntDice() {
    return Number(Math.floor(Math.random() * 6 + 1));
  }
  const diceNumber = getRandomIntDice();
  if (diceNumber === 6) {
    document.getElementById(
      "h3-el"
    ).innerText = `Congratulations you got 6 from ${count + 1} clicks.`;
  } else {
    document.getElementById(
      "h3-el"
    ).innerText = `Number you got is ${diceNumber}.`;
  }
}

btn.onclick = function () {
  count++;
  // disp.innerHTML = count;
};
