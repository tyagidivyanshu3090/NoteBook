# 😎 Basic of JavaScript

- **Dynamically Typed and Forgiving Language:** JavaScript is dynamically typed (variable types can change) and forgiving (doesn't always produce errors for minor syntax omissions like missing semicolons).
- Console in JavaScript: `console.log()` is used to print messages to the console.
- Comments in JavaScript: Explains single-line (`//`) and multi-line (`/* ... */`) comments for code readability.
- Variables:
  - Defined as containers that hold data and can be manipulated in a program.
  - Three stages: Declaration, Initialization, and Use.

## 😁 `var`, `let`, and `const` keywords:

- `var`: Can be re-declared and updated, has global scope.
- `let`: Cannot be re-declared but can be updated, has block scope.
- `const`: Cannot be re-declared or updated, has block scope, and must be declared and initialized simultaneously.

## 🧐 Rules for variable declaration:

- Case-sensitive.
- Allowed characters: letters, digits, underscore (`_`), and dollar sign (`$`).
- First character must be a letter, underscore, or dollar sign.
- Reserved words cannot be used as variable names.

## 🤔 Naming Conventions:

- `camelCase`: The predominant convention for variable names, function names, method names, and properties. [ even JSON ]
- `snake_case`,: Python -> for variable names, function names, method names, and module names.
- `PascalCase`: Used for JavaScript class names and React component names.
- `kebab-case`: CSS [ e.g., background-color, font-size ], URL

## 💡 What is typeof in JavaScript?

- typeof is an operator in JavaScript.
- It is used to find out the type of a value or variable.
- Understand the historical bug in the typeof

```js
console.log(typeof null); // It prints "object", which is actually a historical bug in JavaScript — but it has been kept that way for backward compatibility.
```
