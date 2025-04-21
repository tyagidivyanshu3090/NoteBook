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

# 📚 classList Property

- The classList property is used in JavaScript to add, remove, or toggle CSS classes on an HTML element.
- In the project, we used classList to remove the hidden class from the modal (✅ at Line 15) when the user clicks a button.
- By using classList, we can dynamically apply CSS styles to elements without manually changing the HTML.
- **Note:** while adding the class using classList we dont use dot notation

```js
modal.classList.remove("hidden"); // Correct ✅
modal.classList.add("active"); // Correct ✅
```

# For selecting the element by ID:

- `getElementbyId('')`: You only write the ID name, no # symbol. It is faster method

```js
const element = document.getElementById("myId");
```

- `querySelector('#')`: You must use the # symbol before the ID name (because it's a CSS selector).
  - querySelector is more flexible — you can also select classes (.), tags (div), or complex combinations.

```js
const element = document.querySelector("#myId");
```
