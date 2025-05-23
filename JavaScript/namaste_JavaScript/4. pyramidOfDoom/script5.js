// * 1. Promise api: Promise.all [ Pass ]

// const p1 = new Promise((res) => setTimeout(() => res("P1 success"), 3000));
// const p2 = new Promise((res) => setTimeout(() => res("P2 success"), 1000));
// const p3 = new Promise((res) => setTimeout(() => res("P3 success"), 2000));

// Promise.all([p1, p2, p3])
//   .then((result) => console.log(result)) // [ 'P1 success', 'P2 success', 'P3 success' ]
//   .catch((error) => console.error(error));

// ? Promise.all -> rejection
const p1 = new Promise((res) => setTimeout(() => res("P1 success"), 1000));

const p2 = new Promise((_, rej) => setTimeout(() => rej("P2 failed"), 2000));

const p3 = new Promise((res) => setTimeout(() => res("P3 success"), 3000));

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise failed:", error);
  });
