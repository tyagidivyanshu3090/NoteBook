document.addEventListener("DOMContentLoaded", () => {
  const basket1Count = document.querySelector(".basket-1 span");
  const basket2Count = document.querySelector(".basket-2 span");

  const totalCount = 10;

  basket1Count.innerHTML = totalCount;
  basket2Count.innerHTML = 0;

  console.log(basket1Count);
  console.log(basket2Count);
});
