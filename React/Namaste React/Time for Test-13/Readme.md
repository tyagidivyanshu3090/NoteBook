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
- For testing the application: we need to install the babel dependencies for the jest. [why we need babel for jest explained later]
  - configure the babel: `babel.config.js`
  - Since parcel uses babel internally and we have installed the babel dependencies for testing -> there is chance of conflict. hence we need to add the `.parcelrc`

## Extra Notes

    - Parcel comes with its own internal Babel setup to build your application for the browser. When you add your own babel.config.js for Jest, a conflict arises because Parcel might automatically pick up this file and use it for its own process. This can override Parcel's smart defaults and potentially break your application build.
    - **Solution**: .parcelrc ✅
      - The .parcelrc file is the solution to this conflict. By creating this file, you can explicitly tell Parcel to ignore your custom babel.config.js and use its own default transformers instead.

```json
// .parcelrc
{
  "extends": "@parcel/config-default"
}
```

- This configuration effectively separates the two environments: Jest will use your babel.config.js for testing. Parcel will use its own internal configuration for building your app.

## Why Babel is Needed for Testing ⚙️

    - Babel is a transpiler. The environment where Jest runs your tests (Node.js) doesn't understand JSX (<div>) or some modern JavaScript features out of the box. Babel's job is to translate that modern code into a version of JavaScript that Node.js can execute.
    - `babel-jest`: The package that acts as a bridge, telling Jest to use Babel for processing files.

## Creating the jest configuration

- command: `npx jest --init`: create the `jest.config.js`

## Need to install jest-environment package

- `jsdom` library
