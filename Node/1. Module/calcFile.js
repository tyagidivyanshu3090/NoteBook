console.log("Maths calculation file");

function calcFunction(a, b) {
  var sum = a + b;
  console.log(a + b);
}

let userName = "Navjot Tyagi";

// Export explicitly
module.exports = { calcFunction: calcFunction, userName: userName };

/*
 * ShortHand notation of the object
 *  module.exports = { calcFunction, userName };
 */
