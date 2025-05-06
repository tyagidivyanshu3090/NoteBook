// * These lines select the elements from HTML and store them in variables to update later.
const basket1Count = document.querySelector(".basket-1 span");
const basket2Count = document.querySelector(".basket-2 span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const totalCount = 10; // * Total apple in the game

// * Initially, Basket 1 has 10 apples, and Basket 2 has 0.
basket1Count.textContent = totalCount;
basket2Count.textContent = 0;

// ! Track how many apples are in each basket using variables.
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalCount - secondBasketAppleCount;

//? Implementing the functionality of left arrow:
leftArrow.addEventListener("click", () => {
  if (firstBasketAppleCount !== totalCount) {
    secondBasketAppleCount--;
    firstBasketAppleCount = totalCount - secondBasketAppleCount;
    basket1Count.textContent = firstBasketAppleCount;
    basket2Count.textContent = secondBasketAppleCount;
  }
});

// ? Implementing the functionality of right arrow
rightArrow.addEventListener("click", () => {
  if (secondBasketAppleCount !== totalCount) {
    secondBasketAppleCount++;
    firstBasketAppleCount = totalCount - secondBasketAppleCount;
    basket1Count.textContent = firstBasketAppleCount;
    basket2Count.textContent = secondBasketAppleCount;
  }
});
