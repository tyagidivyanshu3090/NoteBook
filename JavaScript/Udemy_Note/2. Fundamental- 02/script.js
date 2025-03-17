// ? Commit 1: Using Strict mode
"use strict";

// let hasDriversLicense = false; // Drivers
// let passTest = true;

// if (passTest) hasDriverLicense = true; // ! The variable is not created hence it will create an error on console in strict mode
// if (hasDriversLicense) console.log("you can drive the car");

// ? Commit 2: Function in javaScript -> Expression and Declaration

// * Function Declaration
// logger(); // I'm Divyanshu tyagi & I have created a function using function keyword

// function logger() {
//   console.log(
//     `I'm Divyanshu tyagi & I have created a function using function keyword`
//   );
// }

// // * Function Expression
// logger1(); // ! Error

// const logger1 = function () {
//   console.log(
//     `I'm Divyanshu tyagi & I have created a function using function keyword`
//   );
// };

// ? Commit 3: Arrow function

// const functionName = (parameters) => {
//   // function body
// };

// const greet = (name) => `Hello, ${name}!`;
// const add = (a, b) => a + b;
// const sayHello = () => console.log("Hello, world!");

// ? Commit 4: Function calling function

// * CallBack Function

function processData(data, callback) {
  console.log("Processing:", data);
  callback(); // Calling the passed function
}

function onComplete() {
  console.log("Processing complete!");
}

processData("User Data", onComplete);
/* 
Output:
Processing: User Data
Processing complete!
*/

//* Closure: A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing.
function outerFunction(outerValue) {
  function innerFunction(innerValue) {
    console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
  }
  innerFunction(5); // Calling inner function
}

outerFunction(10); // Output: Outer: 10, Inner: 5
