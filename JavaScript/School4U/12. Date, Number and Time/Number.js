// In javaScript we have Number type for the integer and float

let number1 = 10;
let number2 = 10.22;
console.log(typeof number1, typeof number2); //* number number

let number3 = new Number(10); // constructor method
let number4 = Number(10); // or Number('10') or 10 // Literal method

console.log(number3);

// Properties in the Number Object:
// To call the properties on object we dont use curly bracket

console.log(Number.MAX_VALUE); // Represents the largest possible number in JavaScript.
console.log(Number.MIN_VALUE); // Represents the smallest positive number in JavaScript.
console.log(Number.POSITIVE_INFINITY); //Represents positive infinity.
console.log(Number.NEGATIVE_INFINITY); // Represents negative infinity.
console.log(Number.NaN); // Represents "Not-a-Number," indicating an invalid or unrepresentable numerical value
