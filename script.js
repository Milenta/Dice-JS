"use strict";

/* Game of Dice. When you get number 6 you get special message that contains number you got. 
For all other numbers you get same message and number you got. 
Possible numbers are from 1 to 6 */
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
