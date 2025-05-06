# Project Take

- we want to create a UI which represent 2 basket and on click we can transfer the apples from one basket to other

# why we have used defer in the index.html file?

```html
<script src="script.js" defer></script>
```

- We use the defer attribute in script tag -> to delay the execution of the script until after the HTML document has been completely parsed by the browser.

- ✅ **What defer does:**
  - The browser downloads the script in the background while parsing HTML.
  - But it waits to run the script until the full HTML document is parsed.
  - Ensures DOM is ready when the script runs.
