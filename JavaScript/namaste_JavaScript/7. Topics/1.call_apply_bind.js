// ! Call method example 1: applying call method to the object function

// const person = {
//   firstName: "Akshay",
//   lastName: "Kumar",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// const person2 = {
//   firstName: "Sachin",
//   lastName: "Tendulkar",
// };

// // person.printFullName -> is the functionName
// // call(person2) -> here person2 is this
// person.printFullName.call(person2); // * Sachin Tendulkar

// ! call method example 2: applying call method to the directly function
// const person = {
//   firstName: "Divyanshu",
//   lastName: "Tyagi",
// };

// function greet(greeting, punctuation) {
//   console.log(greeting + " " + this.firstName + punctuation);
// }

// // Call greet with person as `this`, and "Hello" and "!" as arguments
// greet.call(person, "Hello", "!");

// ! apply method

function printFullNameWithHometown(hometown, district) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " @ " +
      district
  );
}

const person1 = {
  firstName: "Akshay",
  lastName: "Kumar",
};

const person2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullNameWithHometown.apply(person1, ["Delhi"]); // Output: Akshay Kumar from Delhi
printFullNameWithHometown.apply(person2, ["Mumbai"]); // Output: Sachin Tendulkar from Mumbai
