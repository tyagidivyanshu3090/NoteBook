# Note:

- Make a new folder for your module. [ Calculate ]
- In the folder we have different file & create `index.js` is like the main file that combines everything.
  - The index.js file acts as the entry point of a folder module in Node.js. It serves as the main file that Node.js looks for when you try to import the entire folder as a module.

## 🔥 Why Use index.js in a Module?

- **Centralized Export:** Combines and exports all the functions, classes, or variables from other files in the folder.
- **Simplified Import:** Allows you to import the entire module with just the folder name.

## 🌟 Key Takeaway:

- index.js acts like a table of contents — it gathers and organizes exports for easier access.
- When you import a folder, Node.js automatically looks for index.js as the entry point.
