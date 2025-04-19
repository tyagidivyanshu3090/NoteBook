"use strict";

// Selecting all the Html tag

const btnsOpenModal = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Applying the event Listener to each btn -> Using forEach Loop or we can use for loop
btnsOpenModal.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Applying the classList Property to add or remove the modal
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

/*
    for (let i = 0; i < btnsOpenModal.length; i++) {
        console.log(btnsOpenModal[i].textContent);
    }
*/

// ? Implementing the close button functionality on the modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
