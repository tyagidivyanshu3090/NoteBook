/*
    ? Notes: Hoisting
    - var is hoisted and initialized as undefined → you can access it, but it's undefined.
    - let and const are hoisted, but not initialized → accessing them before the declaration line gives a ReferenceError.
    - Function expressions (especially with var) are hoisted as undefined. Hence we call console.log the expression name but cant call it -> will give error [ Line 20 & 21 ]

*/

console.log(firstName); // * output is undefined
greet();

function greet() {
  console.log("Welcome to javaScript code");
}
var firstName = "Divyanshu Tyagi";

// console.log(lastName); // !  Reference error  Cannot access 'lastName' before initialization
let lastName = "Divyanshu";

// console.log(juicerFunction); // * undefined
// juicerFunction(); //! cant access the function expression

var juicerFunction = function () {
  console.log("This is the juicer function");
};

// Arrow Function
console.log(hospitalFunction); // Undefined
var hospitalFunction = () => {
  console.log("This is the Hospital function");
};

sum(); //! Error:  TypeError
// console.log(sum); // Undefined
var sum = () => console.log("Sum function called");
