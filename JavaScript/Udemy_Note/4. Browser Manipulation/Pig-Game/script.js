"use strict";

// * Selecting the intial element to implement initial condition
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let activePlayer = 0;
const scores = [0, 0]; // Since array is zero based index -> hence we have 2 players  with id as current--0 & current--1

// Implementing the initial condition
score0El.textContent = scores[0];
score1El.textContent = scores[1];
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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player but before that:
    // 1. assigning the value of currentScore and earlier score to the display
    // 2. setting the currentScore of prev player to zero
    // Update the total score before switching
    scores[activePlayer] += currentScore;

    // Correct way to update the score on screen
    if (activePlayer === 0) {
      score0El.textContent = scores[0];
    } else {
      score1El.textContent = scores[1];
    }
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // Shifting the active player
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
