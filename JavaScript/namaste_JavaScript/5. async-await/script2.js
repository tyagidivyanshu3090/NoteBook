//? Older way using promise:

// const p = new Promise((resolve, reject) => {
//   resolve("Promise is resolved");
// });

// function handlePromise() {
//   p.then(console.log);
//   console.log("This is testing code");
// }
// handlePromise();

// ! Using async and await for promise handling
// * Note: await is alawys used in front of promise

const p = new Promise((resolve, reject) => {
  resolve("Promise is resolved");
});

async function handlePromise() {
  const val = await p; // p is a Promise
  console.log(val);
  console.log("This is testing code");
}
handlePromise();
