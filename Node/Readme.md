# 📝 Commit 1

- **Any application written in JavaScript will eventually be written in JavaScript.**
- **Node.js:** A JavaScript runtime environment built over the `V8 engine` of Chrome. Developed by `Rahn Dahl` @2009.
- Node.js is:
  - Cross-platform
  - Open-source
  - A powerful JavaScript engine
  - Based on an event-driven architecture
  - Capable of asynchronous I/O (also known as non-blocking I/O)

# 📝 Commit 2

- The js Engine [ V8 ] which is used to execute javaScript is written in C++ Language.
- Node.js = V8 Engine + Extra Superpowers 🚀
  - Suppose we want to connect to database or make an api call -> the v8 engine cant do that as it only execute js code. so these super power are appende to Node.js
- **Node.js Superpowers**: Node.js extends the capabilities of the V8 engine by adding modules like:
  - fs (File System): For interacting with the filesystem.
  - http/https: For making network requests and creating servers.
  - process: For interacting with the system process.
  - events: For handling asynchronous events.
  - modules like express, axios, mongoose: For simplifying API calls, database interactions, etc.

# 📝 Commit 3:

## Installation

- When you install Node.js, npm (Node Package Manager) is automatically installed along with it. npm is a package manager for JavaScript that helps you install, manage, and share packages or libraries for your projects.
- To check if both Node.js and npm are installed correctly, you can use these commands in your terminal:

```bash
node -v   # To check Node.js version
npm -v    # To check npm version
```

- To execute a JavaScript file using Node.js, use the following command in your terminal:

```bash
node fileName.js
```

## 🌐 Global Object in Browser and Node.js

In JavaScript, the global object differs depending on the environment — whether it's the browser or Node.js. However, there is a universal global object called **`globalThis`** available in all runtime environments.

---

### 🤔 Browser

- The global object can be accessed using:
  - **`this`**
  - **`window`**
  - **`self`** (inside **web workers**)
  - **`frames`**
- Provides functionalities like **`setTimeout`**, **`setInterval`**, and more.

---

### 🤔 Node.js

- The global object is accessed using:
  - **`global`**
- Offers similar functionalities like **`setTimeout`**, **`setInterval`**, etc.

```javascript
console.log(this); // Outputs an empty object {} in Node.js
// In Node.js, `this` does NOT reference the global object at the top level.
```

### 📝 Note:

- The global object is not part of the V8 engine itself. Instead, it is part of the extended capabilities provided by the browser environment or Node.js (commonly referred to as the "superpowers" of Node.js).

> 🤣 Standard Global Object: Across all JavaScript environments (Node.js, Browser, etc.), the global object can be accessed using: `globalThis`

# 📝 Commit 4

## 😒 Module wrapper function

- In Node.js, every module is wrapped in an `Immediately Invoked Function Expression (IIFE)` before execution. This mechanism is known as the **module wrapper function.**
- To access the function and variable of the module we need to use `module.exports`

```js
(function (exports, require, module, __filename, __dirname) {
  // Your module code here
});
```

## Steps: When a Node.js file is executed, it goes through the following steps internally:

- **Loading the Module** Node.js reads the module code from the file.
- **Wrapping in an IIFE**
- **Execution** The function is immediately invoked, isolating the module's scope.
- **Caching** The module is cached, so subsequent require() calls use the cached version.

# 📝 Commit 5: Understanding require() in Node.js

## 🤔 Overview

- require() is used in Node.js to import modules. When a module is required, Node.js goes through a series of steps to resolve, load, execute, and cache the module.

## 🤔 Steps Involved in require()

- **Resolving the module:** Node.js determines the module type (built-in, external package, JSON, or local file).

  - Built-in modules (fs, path, etc.).
  - node_modules folder for third-party packages.
  - Absolute or relative file paths (./module.js, ../module.js).

- **Loading the module:** Once resolved, Node reads the module’s source code.

  - .js → Treated as JavaScript.
  - .json → Parsed into an object.
  - .node → Compiled native add-ons.

- **Wraps the module in IIFE:** Node wraps the module’s code inside an Immediately Invoked Function Expression (IIFE) to provide isolation.
- **Evaluation:** i.e. module.exports is returned
- **Caching:** Node caches the module in require.cache to prevent reloading and re-executing the same module multiple times. If require() is called again for the same module, the cached version is returned instead of reloading.

# 📝 Commit 6: Understanding libuv in Node.js

- JavaScript is single threaded synchronous language. 🧐 So how asynchronous code is executed?
  - It is the super power of Node.js which provides the asynchronous function to the javaScript. These super power of Node.js is present in the library **libuv** 🐉.
    - Node.js gets its asynchronous capabilities from `libuv` — a powerful library that enables non-blocking operations by working with the operating system.

## 🛠 How it Works?

- When the V8 JavaScript engine encounters an asynchronous operation (like setTimeout, file reading, or a network request), it does not execute it immediately.
- Instead, it hands over the task to libuv, which manages the operation in the background. libuv interacts with the operating system to perform the task asynchronously. Once the task is completed, libuv notifies Node.js, which then executes the callback function associated with that task.
  - libuv contains `thread pool`, `event loop`, `I/O Queue`

## 🏗 Components of libuv

- libuv consists of several key components:
  - Event Loop 🌀 → Continuously checks if there are pending tasks that need to be executed.
  - Thread Pool 🔄 → Used for heavy tasks like file system operations and cryptography, running them in parallel.
  - I/O Queue 📩 → Manages input/output operations efficiently, ensuring they don’t block the main thread.

# 📒 Notes

- As discussed the maximum code of v8 is written in C++ language
- Node.js = V8 Engine + Additional Features (Superpowers)
  - One of the super Power of Node.js is to handle the asynchronous code through `libuv library`
  - The code of Node.js -> written in javaScript (61%)
  - The code of libuv is written in C-language.
