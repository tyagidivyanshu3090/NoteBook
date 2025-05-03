function outer() {
  let count = 0; // <-- outer scope variable
  return function inner() {
    count++;
    console.log(count); // <-- uses outer variable
  };
}

// * Call 'outer' which returns the 'inner' function, and immediately invoke that inner function
outer()(); // Output: 1
