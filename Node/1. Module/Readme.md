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

## 🤔 In the ES Module:

- In ES Modules (ESM), if you want to use import and export syntax in a Node.js environment, you need to set the **"type": "module"** property in your package.json file
- `File Extensions:` Always include .js or .mjs in import paths to avoid issues.
- **If "type": "module" is not set, Node.js assumes CommonJS by default.**
- In the ES module we have 2 type
  - `Named export and import:` use of curly bracket while importing
    - In named imports, the name of the function or variable must match exactly as it was defined during export. If there's a mismatch, it will result in an error.
  - `Default export`: A module can have only one default export.
    - `Default Import`: No use of curly bracket

## 🤔 Notes:

- In CommonJS modules, when we use `require()` to import a module, it is done synchronously — meaning the code waits for the module to load before continuing.
- In ES Modules (ESM), the `import and export statements` are `asynchronous` and can take advantage of JavaScript's asynchronous capabilities.
  - However, static imports (import { x } from 'module') still execute synchronously, while dynamic imports (import('module')) are asynchronous.

## 🤔 Notes:

- In CommonJS modules, the code runs in non-strict mode by default, but you can enable strict mode manually using "use strict"; at the top of the file.
- In ES Modules (ESM), the code always runs in strict mode by default, and you don't need to explicitly declare "use strict";.

## 🤔 Notes:

- In CommonJS modules, we use module.exports to export functions, variables, or objects. Initially, module.exports is an empty object ({}).

```js
console.log(module.exports); // {} -> Empty object
```

- If we export something using module.exports or exports, the object will no longer be empty.

```js
module.exports.greet = function () {
  console.log("Hello!");
};

console.log(module.exports); // Output: { greet: [Function: greet] }
```

# Commit 3: Making a folder a module

- To make a folder a module in Node.js, you typically create a folder `[moduleAsFolder]` containing a set of related files (like functions, classes, or utilities) and structure it in a way that allows you to import the folder directly.
