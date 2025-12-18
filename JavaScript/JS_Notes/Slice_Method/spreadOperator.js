// 1. Modern Spread operator concept to create a copy of an array
let original = [{ name: "Gemini" }];
let copy = [...original];

copy[0].name = "Updated";
console.log(original[0].name); // "Updated" (Both changed!)

// ------------------------------------------------------------------

// 2. applying spread operator or slice() to copy of an array of object

// ? * In this address is copied not the value

let data = [{ name: "Gemini" }];
let copyData = [...data];

console.log(data === copyData); // false * addresses are different

console.log(data[0] === copyData[0]); // true * values are same

copyData[0].name = "Updated";
console.log(data); // [ { name: 'Updated' } ] (Only copyData changed!)
console.log(copyData); // [ { name: 'Updated' } ]


