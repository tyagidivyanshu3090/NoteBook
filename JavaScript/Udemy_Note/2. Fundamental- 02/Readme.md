# 📝 Commit 1: Strict Mode

## Description

This commit introduces JavaScript's strict mode, which helps in writing safer and more reliable code by catching silent errors and enforcing better coding practices.

## Changes

- Added `'use strict';` at the beginning of the script to enable strict mode.
- Ensured that strict mode is the first statement in the script.

## Benefits

- **Prevents Accidental Errors**: Helps developers avoid common mistakes.
- **Enforces Declared Variables**: Variables must be explicitly declared before use.
- **Improves Performance**: Some optimizations are enabled by the JavaScript engine when strict mode is in use.

## Example

```js
"use strict";
myVar = 10; // ❌ Error: myVar is not defined
```

## Notes

- Always place `'use strict';` at the top of your script or function.
- Helps in writing better JavaScript code by making errors more explicit.

# 📝 Commit 2: Function Declaration and expression

- A Function Declaration defines a function with the function keyword, followed by a name. These functions are hoisted, meaning they can be called before they are defined in the code.
- A Function Expression defines a function and assigns it to a variable. These functions are not hoisted, meaning they cannot be called before their definition.

```js
greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function () {
  console.log("Hello!");
};
```

# 📝 Commit 3: Arrow Function

- Arrow function are not hosisted in javaScript
- They dont get the this keyword [ Studied later ]
- If there is only one parameter, parentheses can be omitted
- If there is only one expression, curly braces {} and return can be omitted
- If there are no parameters, empty parentheses () are required:
