// ? Invoking same promise multiple times
// * When a resolved promise is awaited multiple times, the JavaScript engine does not re-execute the promise logic. Instead, it returns the already resolved value instantly for subsequent awaits.

// const p = new Promise((res) => {
//   setTimeout(() => res("✅ Resolved!"), 2000);
// });

// async function test() {
//   const r1 = await p; // Waits 2 sec
//   console.log(r1);
//   const r2 = await p; // Instantly resolved
//   console.log(r2);
// }

// test();

// ? Invoking different promise

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 4000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved");
//   }, 2000);
// });

// async function test() {
//   const r1 = await p1; // waits 4s
//   console.log(r1);
//   const r2 = await p2; // waits for 0second
//   console.log(r2);
// }

// test();
