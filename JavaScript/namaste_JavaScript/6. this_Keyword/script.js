// * value of this in strict mode

// "use strict";

// function firstName() {
//   console.log(this); // * undefined
// }

// firstName();

// * value is this in non-strict mode

function myFunction() {
  console.log(this);
}

myFunction(); // In a browser, this will log the window object
