//* Collecting function arguments

function sum(...numbers) {
  // 'numbers' will be an array
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5, 100)); // Output: 115

//* Destructuring Arrays with Rest:
const arr = [1, 2, 3, 4];

const [first, ...rest] = arr;
console.log(first); // 1
console.log(rest); // [2, 3, 4]

let users = ["Manas", "Muskan", "Mehak", "Harshit", "Rishabh", "Saurabh"];
let [firstUser, secondUser, ...otherUsers] = users;

console.log(firstUser); // Output: "Manas"
console.log(secondUser); // Output: "Muskan"
console.log(otherUsers); // Output: ["Mehak", "Harshit", "Rishabh", "Saurabh"]

// * Rest in object destructuring
let obj = {
  name: "Manas",
  age: 21,
  city: "Bhagalpur",
  passion: "teaching",
};

let { name, age, ...otherKeys } = obj;

console.log(name); // Output: "Manas"
console.log(age); // Output: 21
console.log(otherKeys); // Output: { city: "Bhagalpur", passion: "teaching" }
