const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// Result: ["Apple", "Banana", "Mango", "Orange"]

// ------------------------------------------------------------------
// 2. Sort numbers Problem

const numbers = [10, 5, 80, 2];
numbers.sort();
console.log(numbers);
// Result: [10, 2, 5, 80]
// (Why? Because "10" starts with "1", which comes before "2")

// ------------------------------------------------------------------
// 3. Sort numbers Solution: Compare method

const numbers2 = [10, 5, 80, 2];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
// Result: [2, 5, 10, 80]
