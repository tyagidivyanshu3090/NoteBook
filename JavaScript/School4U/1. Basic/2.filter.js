// Understanding the filter function:
/*
    ? Notes on filter function
        * The filter() function is an array method in JavaScript.
        * 👉 It is used to create a new array containing only those elements that pass a specific condition (test).
        * The filter() function takes a callback function that returns either true or false for each element. If the callback returns true, the element is included in the new array; otherwise, it is excluded.
*/

/*
    ? Take aways:
        * example 2: use of the startsWith('') function
*/

// ~ Code 1
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]

// & ---------------------------------------------------------------------------------------

// ~ Code 2: Use of startWith('') function in JS

// const fruits = ["apple", "banana", "cherry", "avocado"];

// const aFruits = fruits.filter((fruit) => {
//   return fruit.startsWith("a");
// });

// console.log(aFruits); // Output: ["apple", "avocado"]

// & ---------------------------------------------------------------------------------------

// ~ Code 3: Applying filter over object
const students = [
  { name: "Amit", score: 85 },
  { name: "Riya", score: 72 },
  { name: "John", score: 90 },
];

const highScorers = students.filter((student) => {
  return student.score > 80;
});

console.log(highScorers); // *  Output: [{ name: "Amit", score: 85 }, { name: "John", score: 90 }]
