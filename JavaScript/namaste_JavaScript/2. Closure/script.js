function outerFunction() {
  let outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // inner function has access to outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am outside!

// ! Even though outerFunction() has already finished executing, innerFunction still remembers outerVar. That’s a closure.
