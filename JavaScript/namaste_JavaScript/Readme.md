# JavaScript - Unit 1: Execution Context

## 🔍 What is an Execution Context?

In JavaScript, **everything happens inside an _execution context_**.  
It is the environment in which JavaScript code is evaluated and executed.

---

## 🧠 Components of Execution Context

An Execution Context is made up of two main parts:

### 1. 📦 Memory Component (Variable Environment)

- Stores **variables** and **function declarations**.
- Works like a key-value pair store.
- Example:
  ```js
  var a = 10;
  function greet() {
    console.log("Hello!");
  }
  ```
- a is stored as: { a: 10 }
- greet is stored as: { greet: function }

### 2. ⚙️ Code Component (Thread of Execution)

- Responsible for executing the code line by line.
- This is where the JavaScript engine runs your code and carries out logic, loops, function calls, etc.
