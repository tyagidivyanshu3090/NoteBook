# 📝 Commit 1: Strict Mode

## Description

This commit introduces JavaScript's strict mode, which helps in writing safer and more reliable code by catching silent errors and enforcing better coding practices.

## Changes

- Added `'use strict';` at the beginning of the script to enable strict mode.
- Ensured that strict mode is the first statement in the script.
- Highlighted how strict mode prevents accidental errors.

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
