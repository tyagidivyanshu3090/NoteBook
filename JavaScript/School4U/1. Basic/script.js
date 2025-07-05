// Understanding the typeof operator

// console.log(typeof 5); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (special case!)
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"
// console.log(typeof null); // It prints "object", which is actually a historical bug in JavaScript — but it has been kept that way for backward compatibility.

let y = null;
console.log(y); // null
console.log(typeof y);  // object
