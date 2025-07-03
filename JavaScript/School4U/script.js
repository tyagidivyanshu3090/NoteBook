// setItem: method is used to store data in the browser's storage. Remember, both the key and value will be stored as strings.
localStorage.setItem("name", "Manas Kumar Lal");
localStorage.setItem("age", "21"); // Even numbers are stored as strings

// * If you call setItem with an existing key, the old value will be overwritten.
localStorage.setItem("name", "Smile"); // 'Manas Kumar Lal' is replaced by 'Smile'

//* key() -> finding the name of key at particular index
localStorage.setItem("name", "Manas");
localStorage.setItem("age", "21");
console.log(localStorage.key(0)); // Might output 'name' or 'age' (order is not guaranteed)
console.log(localStorage.key(1)); // Might output the other key

// length method -> return the number of items saved in local Storage
console.log(localStorage.length); // If 'name' and 'age' are stored, outputs 2
