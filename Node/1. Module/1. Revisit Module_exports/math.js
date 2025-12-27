console.log("Hello from math.js");

function calculateSum(a, b) {
  return a + b;
}

let x = 10;

// Different ways to export
// --------------------------------------------------
// type 1: This will give error: becoz we can't export multiple times and last export will override the previous exports. Hence wrong way

// module.exports = calculateSum;
// module.exports = x;

// --------------------------------------------------

// type 2: This will work becoz module.exports is an object and we can add properties to it. Hence correct way

// module.exports.calculateSum = calculateSum;
// module.exports.x = x;

// --------------------------------------------------

// Type 3: Exporting the function
// module.exports = {
//   calculateSum: calculateSum,
//   x: x,
// };

// --------------------------------------------------

// type 4: Using shorthand for type 3
module.exports = { calculateSum, x };
