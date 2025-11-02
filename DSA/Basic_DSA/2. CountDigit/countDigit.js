// Counting the number of digit in the number
// To solve the question while loop is used

function countDigit(number) {
  // handling corner case:
  if (number === 0) return 1;

  // 2. Handle the "Negative" corner case
  // Convert the number to positive using Math.abs()
  number = Math.abs(number);

  let count = 0;
  while (number > 0) {
    // input = input / 10; // When you divide an integer in JavaScript, you can get a decimal (a floating-point number).
    //  * JavaScript division (/) keeps the decimal.
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

let input = -1974;

console.log("Number of digit is -> ", countDigit(input));

// Extra: Short way
// let input = 1974;
// let digitCount = input.toString().length;
