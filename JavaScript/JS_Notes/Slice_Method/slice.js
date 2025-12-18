// Slice method

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

let newFruits = fruits.slice(1, 4);

console.log(newFruits); // Output: ["banana", "cherry", "date"]

console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// ------------------------------------------------------------------

// 1.  Creating the copy using slice method

let sliceCopy = fruits.slice();

console.log(sliceCopy); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// ------------------------------------------------------------------

// 2. Passing single argument

let singleArg = fruits.slice(2);

console.log(singleArg); // Output: ["cherry", "date", "elderberry"]

// ------------------------------------------------------------------

// 3. Negative start index

let negativeStart = fruits.slice(-2);

console.log(negativeStart); // Output: ["date", "elderberry"]
