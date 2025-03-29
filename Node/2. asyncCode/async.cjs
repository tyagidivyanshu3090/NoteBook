const fs = require("fs");

const https = require("https");

console.log("Hello World");

var number1 = 18;
var number2 = 26;

// Making an api call

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(
  (arg) => {
    console.log(`SetTimeout is called in 5 second with argument as ${arg}`);
  },
  5000,
  "Thanks for calling"
);

// Reading the file

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiple(x, y) {
  return x * y;
}

console.log(multiple(number1, number2));
