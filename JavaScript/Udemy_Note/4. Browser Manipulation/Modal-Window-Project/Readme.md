# About project:

- You are building: ➡️ A Modal Window UI component.
- 💬 In Simple Words:
  - A modal window is a small pop-up box that appears over the main webpage when you click a button.
  - It blurs or darkens the background with an overlay.
  - You can close the modal by:
    - Clicking the "close" button ❌
    - Clicking outside the modal (on the dark overlay)
    - Pressing the Esc key on your keyboard

# 📚 classList Property

- The classList property is used in JavaScript to add, remove, or toggle CSS classes on an HTML element.
- In the project, we used classList to remove the hidden class from the modal (✅ at Line 15) when the user clicks a button.
- By using classList, we can dynamically apply CSS styles to elements without manually changing the HTML.
- **Note:** while adding the class using classList we dont use dot notation

```js
modal.classList.remove("hidden"); // Correct ✅
modal.classList.add("active"); // Correct ✅
```
