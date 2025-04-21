"use strict";

// * Selecting the intial element to implement initial condition

let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

// Implementing the initial condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;

// * Implementing the rolling the dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate a radom dice roll
  // 2. Display the dice on screen
  // 3. check if the rolled value is 1 -> if true, switch to next player
  // 4. else add the rolled value to currentScore of player

  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  // Adding the dice image to the src element of img tag
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    // Not equal to 1 -> add dice value to currentScore
    currentScore += dice;
    console.log(currentScore);
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
    currentScore = 0;
  }
});
