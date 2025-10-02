// In simple words, splice() is a "do-it-all" method for JavaScript arrays. It can:
    // 1. Remove elements from an array.
    // 2. Add new elements to an array.
    // 3. Replace elements (by doing both at the same time).

let fruits = ["Apple", "Banana", "Cherry", "Date"];

// --- EXAMPLE 1: REMOVING elements ---
// Remove 2 elements starting from index 1 ("Banana", "Cherry")
let removedItems = fruits.splice(1, 2);

console.log(removedItems); // Output: ["Banana", "Cherry"]
console.log(fruits);       // Output: ["Apple", "Date"] <- The original array is changed!


// --- EXAMPLE 2: ADDING elements ---
// At index 1, remove 0 elements, and add "Mango" and "Orange"
fruits.splice(1, 0, "Mango", "Orange");

console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Date"]


// --- EXAMPLE 3: REPLACING elements ---
// At index 2, remove 1 element ("Orange") and add "Grape"
fruits.splice(2, 1, "Grape");

console.log(fruits); // Output: ["Apple", "Mango", "Grape", "Date"]