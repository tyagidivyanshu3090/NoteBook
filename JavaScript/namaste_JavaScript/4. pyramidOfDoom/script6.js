const p1 = new Promise((res) => setTimeout(() => res("P1 success"), 1000));

const p2 = new Promise((_, rej) => setTimeout(() => rej("P2 failed"), 2000));

const p3 = new Promise((res) => setTimeout(() => res("P3 success"), 1500));

Promise.allSettled([p1, p2, p3]).then(console.log);
