# Commit 1:

- app.js serves as the entry point and can be executed with the command: node app.js.
- calcFile is a separate module that calculates the sum of two numbers.
- To include calcFile in app.js, we use the require('path/to/file') function.
- **Note**: **_require is a synchronous function._**
  - In Node.js, the require() function is synchronous. When you use require(), Node.js loads the module and returns its exports before moving to the next line of code. This means that the module loading happens in order and blocks further execution until the requested module is fully loaded.
