// ? Mutating Existing Variables -> To reassign values to already declared variables, wrap the destructuring assignment in parentheses.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Must wrap in parentheses to avoid syntax error
({ a, b } = obj);
console.log(a, b); // 23 7
