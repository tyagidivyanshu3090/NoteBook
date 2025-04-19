"use strict";

// Selecting all the Html tag

const btnsOpenModal = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector("close-modal");

// Applying the event Listener to each btn -> Using forEach Loop or we can use for loop
btnsOpenModal.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(`button clicked ${index + 1}`);
    console.log(`${item.textContent}`);
  });
});

/*
    for (let i = 0; i < btnsOpenModal.length; i++) {
        console.log(btnsOpenModal[i].textContent);
    }
*/
