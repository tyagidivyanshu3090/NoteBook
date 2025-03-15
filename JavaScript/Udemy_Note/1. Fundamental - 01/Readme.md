# commit 1

- File used: `script1.js`
- Infusing the script code in the html using the script tag
- Using the alert function in the first commit 
- 🤔 What is difference btw alert and prompt function in the javaScript? 

# Commit 2: Convention

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

# Commit 3: Dynamic Typing in JavaScript

## Notes
JavaScript is a **dynamically typed language**, meaning variables are not explicitly bound to a specific data type. Instead, the type is determined at runtime and can change based on the assigned value.

## Considerations:
⚠️ May lead to unintended type conversions (e.g., `"5" + 5 = "55"`).
⚠️ Requires careful handling to avoid unexpected behavior.
