# Time to test application

- To set up the testing environment from scratch as shown in the lecture, several packages were installed. They fall into two main categories:
  - core testing libraries and
  - Babel dependencies for transpilation.

## Core Testing Libraries

- **React Testing Library (@testing-library/react)**: The primary library for rendering and interacting with React components in a test environment. It provides key utilities like `render and screen`.
- **Jest (jest):** The JavaScript testing framework that acts as the test runner. It discovers test files, executes the tests, and provides the core `test() and expect()` functions.

## Babel Dependencies

- Babel is a transpiler that converts modern JavaScript and JSX into code that the testing environment can understand.
  - Core Babel Packages for Jest (babel-jest, @babel/core, @babel/preset-env): These packages integrate Jest with Babel, allowing it to process modern JavaScript syntax.
