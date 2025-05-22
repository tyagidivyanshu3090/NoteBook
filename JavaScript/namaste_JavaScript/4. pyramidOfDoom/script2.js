// understanding the Immutability of promise

function createResolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "initial value" });
    }, 100);
  });
}

const myPromise = createResolvedPromise();

myPromise.then((result) => {
  console.log("Promise resolved with:", result); // Output: Promise resolved with: { data: 'initial value' }

  // Let's try to change the 'data' property of the resolved value
  result.data = "attempted change";
  console.log("After attempted change:", result); // Output: After attempted change: { data: 'attempted change' }

  // Now, what happens if another '.then()' looks at the same resolved value?
  createResolvedPromise().then((anotherResult) => {
    console.log("Another promise resolves with:", anotherResult);
    // You'll see it resolves with the *original* value, not the changed one from the first '.then()'.
    // Output: Another promise resolves with: { data: 'initial value' }
  });
});
