let myString = " अपना College ";

// 1. Basic Slice (Get "अपना")
// Starts at index 1 and ends *before* index 5
let firstWord = myString.slice(1, 5);
console.log(firstWord); // Output: अपना

// 2. Slice to the End (Get "College")
// Starts at index 6 and goes all the way to the end
let secondWord = myString.slice(6);
console.log(secondWord); // Output: College

// 3. Slice from the Beginning (Get "अपना")
// Starts from the beginning and ends *before* index 5
let firstWordAgain = myString.slice(0, 5); // You need to specify 0 for the start
console.log(firstWordAgain); // Output:  अपना (includes the leading space)

// 4. Slicing with Negative Indices (Get "College")
// Starts at the 7th character from the end (-7) and goes to the end
let lastWordNegative = myString.slice(-7);
console.log(lastWordNegative); // Output: College




