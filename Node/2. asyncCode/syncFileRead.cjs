// ! Synchronization file read

const fs = require("fs");
var a = 10;

// For synchronization file read we use try and catch Block

try {
  const data = fs.readFileSync("./file.txt", "utf8"); // Main thread is blocked and file is read and saved in the data variable
  console.log(data);
} catch (err) {
  console.log(err);
}

console.log(a);
