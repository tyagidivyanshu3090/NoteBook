# Dom Manipulation

## document.querySelector('your-selector')

- document is the global object representing the web page.
- querySelector is used to select the first DOM element that matches a CSS selector.
  - CSS selector: `#` for the id and `dot` for the class

## textContent()

- Gets or sets just the plain text inside an element.
- It ignores HTML tags.

## Math.trunc vs Math.floor

## textContent() vs innerHTML()

### Note: DRY PRINCIPLE

- `Script2.js` is the original code with all cases
- `Script1.js` is refactored code => adhering to DRY principle [ Condense code ]
  - We can also do the refactoring of code using the`function`: Hence we have created a displayMessage function which

# 📚 classList Property

- The classList property is used in JavaScript to add, remove, or toggle CSS classes on an HTML element.
- In the project, we used classList to remove the hidden class from the modal (✅ at Line 15) when the user clicks a button.
- By using classList, we can dynamically apply CSS styles to elements without manually changing the HTML.
- **Note:** while adding the class using classList we dont use dot notation

```js
modal.classList.remove("hidden"); // Correct ✅
modal.classList.add("active"); // Correct ✅
```
