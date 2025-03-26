# Commit 1:

- app.js serves as the entry point and can be executed with the command: node app.js.
- calcFile is a separate module that calculates the sum of two numbers.
- To include calcFile in app.js, we use the require('path/to/file') function.
- **Note**: **_require is a synchronous function._**
  - In Node.js, the require() function is synchronous. When you use require(), Node.js loads the module and returns its exports before moving to the next line of code. This means that the module loading happens in order and blocks further execution until the requested module is fully loaded.

# Commit 2:

### In JavaScript, modules protect their variables and functions from leaking.

- This means that simply requiring a module in another file does not automatically grant access to its variables and functions. Only the explicitly exported elements can be accessed by the importing module.
- To explicitly export elements from a module in JavaScript, you use either `CommonJS (Node.js style)` or `ES6 modules`

## 🤔 In the CommonJS (Node.js style):

- we use `module.exports` and `require` function
  - module.exports to explicitly export variables, functions, or objects from a module.
  - require() to import those exported elements into another file.
