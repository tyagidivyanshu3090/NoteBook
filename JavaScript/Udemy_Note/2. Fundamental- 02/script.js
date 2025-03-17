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

// // * CallBack Function

// function processData(data, callback) {
//   console.log("Processing:", data);
//   callback(); // Calling the passed function
// }

// function onComplete() {
//   console.log("Processing complete!");
// }

// processData("User Data", onComplete);
// /*
// Output:
// Processing: User Data
// Processing complete!
// */

// //* Closure: A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing.

// function outerFunction(outerValue) {
//   function innerFunction(innerValue) {
//     console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
//   }
//   innerFunction(5); // Calling inner function
// }

// outerFunction(10); // Output: Outer: 10, Inner: 5

// ? Commit 5: Assignment

// const calAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = function (avgDolphins, avgKolalas) {
//   if (avgDolphins > 2 * avgKolalas) return console.log(`Dolphins wins`);
//   else if (avgKolalas > 2 * avgDolphins) return console.log(`Kolas wins`);
//   else return console.log(`No team win the match`);
// };

// let avgDolphins = calAvg(44, 23, 71);
// let avgKolalas = calAvg(65, 54, 49);

// checkWinner(avgDolphins, avgKolalas);

// ? Array Method:

let friends = ["Navjot", "Jeet", "Ayushi"];

console.log(friends.push("Divyanshu"));
// Output: 4 (push() returns the new length of the array)

friends.unshift(0);
console.log(friends);
// Output: [0, "Navjot", "Jeet", "Ayushi", "Divyanshu"] (0 is added to the beginning)

friends.shift();
console.log(friends);
// Output: ["Navjot", "Jeet", "Ayushi", "Divyanshu"] (Removes the first element '0')

friends.pop();
console.log(friends);
// Output: ["Navjot", "Jeet", "Ayushi"] (Removes the last element 'Divyanshu')
