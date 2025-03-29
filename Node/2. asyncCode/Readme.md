# Lecture 7: sync asyc setTimeout code

# Commit 1:

## Notes:

- require() is a built-in function in Node.js used to import modules.
- 'fs' is the File System module in Node.js, which provides functions for interacting with the file system (reading, writing, updating files, etc.).
- **require** function runs in the synchronous mode

```js
const fs = require("fs");
const https = require("https");
```

# Commit 2: Reading file in the node

- In Node.js, you can read a file using the fs (File System) module. There are different ways to do it out of which 2 methods of reading a file are
  - Asynchronous `fs.readFile()` and
  - Synchronous `fs.readFileSync()`

## Asynchronous

```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

## Synchronous

- when using `fs.readFileSync()`, it's best to use a try...catch block to handle potential errors gracefully. If an error occurs (e.g., the file does not exist or there's a permission issue), it will throw an exception, and without try...catch, your application might crash.

```js
const fs = require("fs");

try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}
```

## Note:

- In Node.js, asynchronous functions typically follow the `error-first callback` convention.

```js
(err, data) => {};
```

- The first parameter (err) represents the error (if any occurs).
- The second parameter (data) contains the result if there was no error.
