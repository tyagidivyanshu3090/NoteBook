"use strict";

// * console.log(document.querySelector(".message").textContent);
// * console.log(document.querySelector(".number").textContent);
// * console.log(document.querySelector(".score").textContent);
// * document.querySelector(".guess").value = 17;

function handleClick() {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent = "Please enter the number";
  }
}
document.querySelector(".check").addEventListener("click", handleClick);
