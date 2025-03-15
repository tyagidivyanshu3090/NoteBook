# 📝 commit 1

- File used: `script1.js`
- Infusing the script code in the html using the script tag
- Using the alert function in the first commit 
- 🤔 What is difference btw alert and prompt function in the javaScript? 

# 📝 Commit 2: Convention

## Variable Naming Convention

### ✅ **Camel Case Naming**
- Variable names follow the **camelCase** convention.
- The first word starts with a lowercase letter, and subsequent words start with an uppercase letter.

#### **Example:**
```js
let userName = "JohnDoe";
let totalAmount = 100;
```

### 🔠 **Capital Letter for Constants & Classes**
- **Constants** are written in **UPPER_SNAKE_CASE**.
- **Class names** follow the **PascalCase** (Upper Camel Case) convention.

#### **Example:**
```js
const PI = 3.14159;
class UserAccount {
  constructor(name) {
    this.name = name;
  }
}
```

# 📝 Commit 3: Dynamic Typing in JavaScript

## Notes
JavaScript is a **dynamically typed language**, meaning variables are not explicitly bound to a specific data type. Instead, the type is determined at runtime and can change based on the assigned value.

## Considerations:
⚠️ May lead to unintended type conversions (e.g., `"5" + 5 = "55"`).
⚠️ Requires careful handling to avoid unexpected behavior.


# 📝 Commit 4: typeof null

## 🔍 Overview

- In JavaScript, using the typeof operator on null does not return null as expected. Instead, it returns 'object'. This is a known historical bug that exists for legacy reasons.

## 😭 Why does this happen?

- In the early versions of JavaScript, values were represented in a way that stored type information in the lower bits of their binary representation. null was represented as 0x00, which was mistakenly interpreted as an object. This was recognized as a mistake but remains unchanged for backward compatibility.

```js
console.log(typeof null); // 'object'
console.log(typeof undefined); // 'undefined'
```

# 📝 Commit 4: let, const and var

- variable declared with `const` can neither be reassigned nor redeclared.
- variable declared with `const` must be initialised with a value 

```js
const firstName; // Error: Missing initializer in const declaration
```

# 📝 Commit 5: Operator

## Exponentiation Operator (`**`)
- `a ** b`: `a` is the base, and `b` is the exponent.
- Equivalent to `Math.pow(a, b)`.

### Examples:

```js
console.log(2 ** 3); // 8 (2 raised to the power of 3)
console.log(5 ** 2); // 25 (5 squared)
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25
```
