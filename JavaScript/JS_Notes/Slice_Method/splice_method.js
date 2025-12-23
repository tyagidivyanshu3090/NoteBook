// 1. Splice method: Removing elements from an array

let numbers = [10, 20, 30, 40, 50];
let removed = numbers.splice(1, 2); // Start at index 1, remove 2 items

console.log(numbers); // [10, 40, 50] (Original is changed!)
console.log(removed); // [20, 30] (It returns what was cut out)

// ------------------------------------------------------------------

// 2. Splice method: Adding elements to an array

let colors = ["Red", "Blue"];
colors.splice(1, 0, "Green", "Yellow"); // At index 1, delete 0, add Green and Yellow

console.log(colors); // ['Red', 'Green', 'Yellow', 'Blue']

// ------------------------------------------------------------------

// 3. Splice method: Replacing elements in an array

let fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1, "Orange"); // At index 1, delete 1, add Orange

console.log(fruits); // ['Apple', 'Orange', 'Cherry']


