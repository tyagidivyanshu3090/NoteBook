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

// Creating the variable so that after finishing the game -> so button is accessible
let playing = true;

// // Implementing the initial condition
// score0El.textContent = scores[0];
// score1El.textContent = scores[1];
// diceEl.classList.add("hidden");
// let currentScore = 0;

// ? Dry Principle: for hold button -> switchPlayer

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // Shifting the active player
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// ? Dry Principle: for the New game -> setting game to fresh start
function init() {
  // 1. set the current Score of player 1 and player 2 = 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  // 2. Hide the dice
  diceEl.classList.add("hidden");
  // 3. set the score as 0. [ Setting the variable to initial value ]
  scores[0] = 0;
  scores[1] = 0;
  // Implementing the initial condition
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  diceEl.classList.add("hidden");
  let currentScore = 0;

  // 4. setting the current score to 0

  console.log(current0El);
  current0El.textContent = 0;
  current1El.textContent = 0;

  // 5. Remove the winner class from both the player
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  // 6. adding the active class to the player 1 and removing to player 2
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
}

// * Implementing the rolling the dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

// ? Hold button functionality
btnHold.addEventListener("click", function () {
  // 1. Add the current score to the active player score & display on the screen
  // 2. Check score is >=100 -> if yes, end/Finish the game
  // 3. Switch to next player
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      // It means current player has won so we need to add the class of winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      // Removing the active class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// ? Implementing the New game functionality
btnNew.addEventListener("click", init);
