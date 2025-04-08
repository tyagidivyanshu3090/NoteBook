const fs = require("fs"); // Needed to use fs.readFile

const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Reading CB", data);
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a =", a);
}

printA();

console.log("Last line of the file.");

/*
    * Answer:
        - a = 100
        - Last line of the file.
        - Timer expired
        - File Reading CB
        - setImmediate
*/
