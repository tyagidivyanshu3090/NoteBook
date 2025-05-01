// ! Q: Printing the value of 1 to 5 at an interval of 1 second each
// We are using the for loop and using the value of i in setTimeout

/*
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
*/

// ? ❌ Problem: All the setTimeout callbacks share the same i because var is function-scoped, not block-scoped. By the time any of the setTimeouts run, the loop is already done, and i has become 6.

// ! Correct code -> Use let instead of var

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// ? let i = 1: let has block scope, so each iteration of the loop gets its own copy of i. setTimeout is scheduled with i * 1000 milliseconds delay. The loop runs instantly and sets 5 timeouts, scheduled at 1s, 2s, ..., 5s.

// ! Trick question: if we want to execute the above code with var only not using let
// * Solution: so we need to create the closure for each iteration for the value -> which is different for each iteration

for (var i = 1; i <= 5; i++) {
  function close(printValue) {
    setTimeout(function () {
      console.log(printValue);
    }, printValue * 1000);
  }
  close(i);
}
