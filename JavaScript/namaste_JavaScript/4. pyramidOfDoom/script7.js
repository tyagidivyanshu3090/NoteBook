const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 3000));
const p2 = new Promise((_, rej) => setTimeout(() => rej("P2 failed"), 1000));
const p3 = new Promise((res) => setTimeout(() => res("P3 done"), 2000));

Promise.race([p1, p2, p3])
  .then((result) => console.log("Success:", result))
  .catch((error) => console.log("Error:", error));
