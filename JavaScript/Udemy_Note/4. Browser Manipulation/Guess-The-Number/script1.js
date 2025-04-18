// File: guess_the_number_game.js

"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function handleClick() {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    if (score > 0) {
      displayMessage("🚫 Please enter a number");
      document.querySelector(".score").textContent = --score;
    }
  } else if (guessNumber > 20 || guessNumber <= 0) {
    if (score > 1) {
      displayMessage("Select a number between 1 and 20");
      document.querySelector(".score").textContent = --score;
    } else {
      displayMessage("🤦‍♂️ You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct!");
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber
          ? "📈 Number is Too High"
          : "📉 Number is Too Low"
      );
      document.querySelector(".score").textContent = --score;
    } else {
      displayMessage("🤦‍♂️ You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
}

document.querySelector(".check").addEventListener("click", handleClick);

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
