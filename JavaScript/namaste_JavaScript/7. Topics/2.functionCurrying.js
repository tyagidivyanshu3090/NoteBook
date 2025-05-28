// * Function currying using bind method
// function multiply(x, y) {
//   return x * y;
// }

// // Creating multiplyByTwo, permanently setting x = 2
// let multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo(5)); // Output: 10

// ! Function currying using the closure

// function multipleFunction(outerParam) {
//   return function (innerParam) {
//     return outerParam * innerParam;
//   };
// }

// let multipleByTwo = multipleFunction(2);
// console.log(multipleByTwo(4)); // 8
