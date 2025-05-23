const p1 = new Promise((res) => setTimeout(() => res("P1 success"), 1000));

const p2 = new Promise((_, rej) => setTimeout(() => rej("P2 failed"), 2000));

const p3 = new Promise((res) => setTimeout(() => res("P3 success"), 1500));

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} succeeded:`, result.value);
    } else {
      console.log(`Promise ${index + 1} failed:`, result.reason);
    }
  });
});

// ? other way to console.log: In the code we have used the shorthand notation as described in the notes + we have not use the bracket for logging the resullt which then method received.
/*
 * Promise.allSettled([p1, p2, p3]).then(console.log);
 */
