// ? Commit 1 -> using the alert on the webpage
// let js = "amazing";
// if (js = "amazing") alert("javaScript is easy to learn")

// ? Commit 2 -> DataType & typeOf operator

// let PI = 3.14;  // * Upper Snake convention -> used for the constant
// console.log(typeof PI); // "number"
// console.log(typeof 42); // "number"
// console.log(typeof "Hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof {}); // "object"
// console.log(typeof undefined); // "undefined"

// ? Commit 3 -> Dynamic type in javaScript

// let data = 10;    // data is a number
// console.log(typeof data); // "number"

// data = "Hello";   // data is now a string
// console.log(typeof data); // "string"

// data = true;      // data is now a boolean
// console.log(typeof data); // "boolean"

// ? Commit 4 -> Bug in javaScript:
// console.log(typeof null); // 'object' rather it shall be null
// console.log(typeof undefined); // 'undefined'

// ? Commit 5 -> let, const and var

// ? Commit 6 -> operator

// console.log(3 ** 4); // Exponent symbol: 81
// console.log(Math.pow(3,4)); // Exponent symbol: 81

// //  Using '+' for concatenation
// let firstName = 'Navjot'
// let lastName = 'Tyagi'
// console.log(firstName + ' ' + lastName) // Navjot Tyagi

// ? Commit 7 -> String Literals & Template literal

// console.log(`
//     Hello world
//     What is your name
//     `);   // Supports Multi-line Strings

// // Allow variable substitution:
// let personName = "John";
// let personAge = 30;
// let message = `My name is ${personName} and I am ${personAge} years old.`;
// console.log(message)

// // Including the expression in template literal
// let year = 2025;
// let birthYear = 2000;
// let age = `I am ${year - birthYear} years old.`;
// console.log(age)

// ? Commit 8 -> Type conversion and Type Coercion

// console.log(Number("Divyanshu")); // NaN

// Game on type coercion
// let number = "1" + 1;
// number = number - 1;
// console.log(number); // 10

// console.log(2 + 3 + 4 + "5"); // "95"
// console.log("10" - "4" - "3" - 2 + "5"); //"15"

// ? Commit 9 -> Truthy and falsy value

// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(0n)); // false

// console.log(Boolean(1)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean([])); // true (empty array)
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean("0")); // true (string "0" is not the number 0)
// console.log(Boolean(function () {})); // true (functions are truthy)

// ? Commit 10 -> Using Ternary Operator in template literal

let expressionValue = 20;

console.log(`I'm ${expressionValue} years old`);

let age = 15;
console.log(`You are premitted to drink ${age > 18 ? "wine 🍷" : "water 💧"}`);
