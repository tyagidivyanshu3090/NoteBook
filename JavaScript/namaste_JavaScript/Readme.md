# 📝 Commit 1

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

# 📝 Commit 2

## 🧠 JavaScript Memory Creation Phase (a.k.a. Hoisting Phase)

- During the memory creation phase of JavaScript's execution context, the JS engine `scans/skims` through the code before executing it and allocates memory for variables and functions. This is part of hoisting.

- In memory creation phase, JavaScript stores following value:
  - for variable declared with var -> Undefined
  - for function: function definition [ i.e. whole code ]
  - let and const Declared but not initialized during the memory phase. They go into a Temporal Dead Zone (TDZ) until actual execution reaches them.
- In the code execution phase, the JavaScript engine executes code synchronously, line by line.
  - When it encounters a function invocation, it creates a new Function Execution Context (FEC) for that function. Each function execution context goes through two main phases, just like the global execution context

## 🧠 Additional Notes:

- The call stack manages the order of function execution.
- Each new function call adds a new execution context to the stack.
- Once the function finishes executing, its context is popped off the stack.

### 🧠 call Stack

- Call stack maintains the order of execution of execution contexts.
- call stack aka
  - Execution context stack or Program stack or Runtime stack or Machine stack

# 📝 Commit 3: Hoisting

- Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before the code is executed. This means that you can use functions and variables before you declare them in the code (sort of), because JavaScript will "hoist" those declarations.

## Note:

- var is hoisted and initialized as undefined → you can access it, but it's undefined.
- let and const are hoisted, but not initialized → accessing them before the declaration line gives a `ReferenceError`.
- function declarations are fully hoisted, so you can call them before they're defined.
- Function expressions (especially with var) are hoisted as undefined.
- Arrow function not hoisted declared with keyword let and const but if declared with the var -> the name of arrow function is hoisted but we cant call them

```js
sum(); // Error:  TypeError
console.log(sum); // Undefined
var sum = () => console.log("Sum function called");
```
