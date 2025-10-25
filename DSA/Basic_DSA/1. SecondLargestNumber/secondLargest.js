/*
Logic: Find Second Largest Number in Array Here's the logic to find the second largest number in an array:
    1. Initialize: Create two variables, 'firstLargest' and 'secondLargest'. Set both to a very small number (like negative infinity).
    2. Loop: Go through each number in the array one by one.
    3. Check for New Largest: If the current number is greater than 'firstLargest':
        - Set 'secondLargest' to the old 'firstLargest' value.
        - Set 'firstLargest' to the current number.
    4. Check for New Second Largest: Else if the current number is greater than 'secondLargest' AND not equal to 'firstLargest': - Set 'secondLargest' to the current number. 
    5. Result: After the loop finishes, 'secondLargest' holds the answer. 
    6. Edge Case: Always check if the array has fewer than two elements first (e.g., return null or -1).
*/

function secondLargest(arr) {
  // Handle corner case
  if (arr.length < 2) {
    return null; // Or -Infinity, or whatever you prefer
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let data of arr) {
    if (data > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = data;
    } else if (data > secondLargest && data !== firstLargest) {
      // Added condition for duplicate
      secondLargest = data;
    }
  }
  return secondLargest;
}

let inputArray = [10, 22, 43, 24, 51];

console.log(
  "Second largest element in the array is ",
  secondLargest(inputArray)
);
