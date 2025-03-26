# Commit 1

- **Any application written in JavaScript will eventually be written in JavaScript.**
- **Node.js:** A JavaScript runtime environment built over the `V8 engine` of Chrome. Developed by `Rahn Dahl` @2009.
- Node.js is:
  - Cross-platform
  - Open-source
  - A powerful JavaScript engine
  - Based on an event-driven architecture
  - Capable of asynchronous I/O (also known as non-blocking I/O)

# Commit 2

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
