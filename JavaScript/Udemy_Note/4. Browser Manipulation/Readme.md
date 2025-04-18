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
