const { calculateSum, x } = require("./math"); // No nee to use the .js extension

const { nameFunction, ageFunction } = require("./utils");

const data = require("./data"); // No need to use the .json extension. You can directly require JSON files. Node automatically parses it into a JS object.

console.log("Printing the value of variable form math.js file: ", x);

console.log("Hello from app.js");

nameFunction("Divyanshu");
ageFunction(22);

console.log(calculateSum(20, 10));

console.log(data);
