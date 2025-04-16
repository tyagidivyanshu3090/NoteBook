"use strict";

// * console.log(document.querySelector(".message").textContent);
// * console.log(document.querySelector(".number").textContent);
// * console.log(document.querySelector(".score").textContent);
// * document.querySelector(".guess").value = 17;

// ? Defining the Secrete number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

//? Getting the score -> which is decreased for every wrong guess
let score = 20;

function handleClick() {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        "🚫 Please enter the number";
      document.querySelector(".score").textContent = --score;
    }
  } else if (guessNumber > 20 || guessNumber <= 0) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Select the Number btw 1 to 20";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct";
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Number is Too High";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Number is Too Low";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
}
document.querySelector(".check").addEventListener("click", handleClick);
