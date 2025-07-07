//* Spreading the element of array
let arr = [1, 2, 3, 4, 5];
console.log(...arr); // Output: 1 2 3 4 5 (individual elements, not an array)

// * Concatenation of array:
let oldArr = [1, 2, 3, 4, 5];
let newArr = [...oldArr, 10, 99, "Divyanshu"];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 10, 99, "Divyanshu"]

//*  Merging the 2 arrays
let arr1 = ["Captain", "Iron Man", "Wanda"];
let arr2 = ["Spider-Man", "Captain's Friend"];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: ["Captain", "Iron Man", "Wanda", "Spider-Man", "Captain's Friend"]

//* Shallow copy of array
let originalArr = [1, 2, 3];
let copyArr = [...originalArr]; // Creates a shallow copy

copyArr.push(5);
console.log(copyArr); // Output: [1, 2, 3, 5]
console.log(originalArr); // Output: [1, 2, 3] (original remains unchanged)

//* Spreading the string + Spreading a String into an Array of Characters:
let str = "Manas Kumar Lal";
console.log(...str); // M a n a s   K u m a r   L a l
let charArray = [...str];
console.log(charArray); // Output: ["M", "a", "n", "a", "s", " ", "K", "u", "m", "a", "r", " ", "L", "a", "l"]

//* Spread in function calls
function consoleThreeUsers(user1, user2, user3) {
  console.log(user1);
  console.log(user2);
  console.log(user3);
}

let users = ["Manas", "Muskan", "Mehak"];
consoleThreeUsers(...users); // Output: Manas, Muskan, Mehak (each on a new line)

//* Shallow copy of object
let obj = { name: "Manas", age: 21, passion: "nonsense", city: "Bhagalpur" };
let objCopy = { ...obj }; // Shallow copy
objCopy.name = "Muskan";
console.log(objCopy); // Output: { name: "Muskan", age: 21, passion: "nonsense", city: "Bhagalpur" }
console.log(obj); // Output: { name: "Manas", age: 21, passion: "nonsense", city: "Bhagalpur" }

//* Merging objects and overriding properties
let newObj = { ...obj, age: 22, passion: "teaching", lifePartner: "Muskan" };
console.log(newObj);
// Output: { name: "Manas", age: 22, passion: "teaching", city: "Bhagalpur", lifePartner: "Muskan" }

let obj1 = { name: "Aman", age: 21 };
let obj2 = { name: "Muskan", age: 19, hobby: "reading" };
let mergedObj = { ...obj1, ...obj2 }; // If keys are same, obj2's values will override
console.log(mergedObj); // Output: { name: "Muskan", age: 19, hobby: "reading" }
