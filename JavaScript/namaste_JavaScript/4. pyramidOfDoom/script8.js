// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 resolved");
//   }, 1000);
// });

//? Promise.any -> At least one success needed otherwise logs the aggregate error

// const p1 = new Promise((_, rej) => setTimeout(() => rej("P1 failed"), 1000));
// const p2 = new Promise((res) => setTimeout(() => res("P2 success"), 2000));
// const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 failed"), 3000));

// Promise.any([p1, p2, p3])
//   .then(console.log) // "P2 success" after 2 sec
//   .catch(console.error);

// ? Promise.any rejection -> all
// * Loging the aggregate error

const p1 = new Promise((_, rej) =>
  setTimeout(() => rej("Promise_1 rejected"), 1000)
);
const p2 = new Promise((_, rej) =>
  setTimeout(() => rej("Promise_2 rejected"), 3000)
);

Promise.any([p1, p2])
  .then(console.log)
  .catch((err) => {
    console.log(err.errors);
  });
