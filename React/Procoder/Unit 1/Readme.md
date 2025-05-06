# 🍎 Apple Basket Game

This project simulates moving apples between two baskets using arrow buttons. It’s a beginner-friendly JavaScript project to understand DOM manipulation and event handling.

---

## 👨‍🏫 Project Overview

- There are **10 apples** initially, all placed in **Basket 1**.
- **Basket 2** starts with **0 apples**.
- Clicking the **➡ right arrow** moves **1 apple from Basket 1 to Basket 2**.
- Clicking the **⬅ left arrow** moves **1 apple back from Basket 2 to Basket 1**.
- The apple counts in both baskets **update live on the screen**.

---

# 📝 why we have used defer in the index.html file?

```html
<script src="script.js" defer></script>
```

- We use the defer attribute in script tag -> to delay the execution of the script until after the HTML document has been completely parsed by the browser.

- ✅ **What defer does:**
  - The browser downloads the script in the background while parsing HTML.
  - But it waits to run the script until the full HTML document is parsed.
  - Ensures DOM is ready when the script runs.
