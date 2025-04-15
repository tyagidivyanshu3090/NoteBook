"use strict";

// * console.log(document.querySelector(".message").textContent);
// * console.log(document.querySelector(".number").textContent);
// * console.log(document.querySelector(".score").textContent);
// * document.querySelector(".guess").value = 17;

// ? Defining the Secrete number

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

function handleClick() {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent =
      "🚫 Please enter the number";
  } else if (guessNumber > 20 || guessNumber <= 0) {
    document.querySelector(".message").textContent =
      "Select the Number btw 1 to 20";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct";
  } else if (guessNumber > secretNumber) {
    document.querySelector(".message").textContent = "📈 Number is Too High";
  } else {
    document.querySelector(".message").textContent = "📉 Number is Too Low";
  }
}
document.querySelector(".check").addEventListener("click", handleClick);
