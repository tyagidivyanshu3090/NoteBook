function createResolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "initial value" });
    }, 100);
  });
}

const myPromise = createResolvedPromise();

// To demonstrate the original resolved value again, we need another independent promise.
const anotherPromise = createResolvedPromise();

myPromise
  .then((result) => {
    console.log("First promise resolved with:", result);
    result.data = "attempted change on first promise's result";
    console.log("After change in first .then():", result);
    return result; // Pass the *modified* object to the next .then() in *this* chain.
  })
  .then((firstChainResult) => {
    console.log(
      "Result in the first chain's second .then():",
      firstChainResult
    );
  });

anotherPromise.then((resultFromAnother) => {
  console.log("Second independent promise resolved with:", resultFromAnother);
});
