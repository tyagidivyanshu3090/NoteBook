// Counting the number of digit in the number
// To solve the question while loop is used

let input = 1974;
let digitCount = 0;
while (input > 0) {
  // input = input / 10; // When you divide an integer in JavaScript, you can get a decimal (a floating-point number).
  //  * JavaScript division (/) keeps the decimal.
  input = Math.floor(input / 10);
  digitCount++;
}

console.log("Number of digit is -> ", digitCount);

// Extra: Short way
// let input = 1974;
// let digitCount = input.toString().length;
