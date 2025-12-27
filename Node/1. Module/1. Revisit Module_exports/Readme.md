# Namaste Node.js: Modules

Detailed notes from the transcript on Node.js modules, covering CommonJS, ES Modules, and practical patterns.

## 1. Introduction to Modules

- **Modularization**: Code cannot logically stay in a single file (`app.js`). It is split into multiple files and folders (modules) for better management and structure.
- **Entry Point**: Typically `app.js` serves as the entry point executed by Node.js (`node app.js`).
- **Module Isolation**: Modules are **protected by default**. Variables and functions defined in one module are private to that module and do not leak to others unless explicitly exported.

## 2. CommonJS Modules (CJS)

- **Default System**: Node.js uses CommonJS by default.
- **`require()`**: Function to import code from another module.
  - Executes the code in the required file immediately.
  - Returns whatever is exported by that module.
  - **Synchronous**: Blocks execution until the module is loaded.
  - **Non-Strict Mode**: Runs in non-strict mode by default (e.g., variables without `var`/`let`/`const` might not error).

### Exporting and Importing

- **`module.exports`**: Special object used to export values.
- **Patterns**:
  1. **Single Export**:
     ```javascript
     // sum.js
     function calculateSum(a, b) { ... }
     module.exports = calculateSum;
     ```
  2. **Object Export**:
     ```javascript
     // sum.js
     module.exports = {
       x: x,
       calculateSum: calculateSum,
     };
     ```
  3. **Shorthand / Destructuring**:
     ```javascript
     // sum.js
     module.exports = { x, calculateSum }; // Shorthand
     // app.js
     const { calculateSum, x } = require("./sum.js"); // Destructuring
     ```
  4. **Attaching properties**:
     ```javascript
     // module.exports is initially an empty object {}
     module.exports.x = x;
     module.exports.calculateSum = calculateSum;
     ```

## 3. ES Modules (ESM)

- **Modern Standard**: The newer, standard JavaScript module system (used in React, Angular, browsers).
- **Features**:
  - **Keywords**: Uses `import` and `export`.
  - **Asynchronous**: Can load modules asynchronously.
  - **Strict Mode**: Runs in strict mode by default.
- **Enabling ESM in Node.js**:
  - Add `"type": "module"` to `package.json`.
  - Or use `.mjs` file extension.

### Syntax Comparison

| Action          | CommonJS (CJS)                  | ES Modules (ESM)                                   |
| :-------------- | :------------------------------ | :------------------------------------------------- |
| **Export**      | `module.exports = value`        | `export const value = ...` or `export default ...` |
| **Import**      | `const val = require('./file')` | `import { val } from './file.js'`                  |
| **Strict Mode** | No (Default)                    | Yes (Default)                                      |

## 4. Advanced Patterns

### Folder Modules (Nested Modules)

- Group related files into a folder (e.g., `calculate/`).
- Create an `index.js` inside the folder to aggregate exports.
- **Usage**: `require('./calculate')` automatically looks for `calculate/index.js`.
- **Benfit**: Abstraction. The consumer (`app.js`) doesn't need to know the internal file structure of the `calculate` module.

```javascript
// calculate/index.js
const sum = require("./sum");
const multiply = require("./multiply");
module.exports = { ...sum, ...multiply };
```

### Importing JSON

- You can directly require JSON files.
- Node.js parses it into a JavaScript object automatically.

```javascript
const data = require("./data.json");
console.log(data);
```

### Built-in Modules

- Node.js comes with core modules like `util`, `fs`, `path`, etc.
- No path required (e.g., `require('util')`).

## Summary

> **Key Takeaway**: Modules are the building blocks of Node.js applications. They encapsulate code, prevent global namespace pollution, and allow for reusable logic. CommonJS is the legacy but prevalent standard in Node.js, while ES Modules are the future standard.
