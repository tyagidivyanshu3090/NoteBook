# Laying the foundation

- Use `npx parcel index.html` to ignite the project and host the application.
- Instead of running the above command every time, you can create a script in your `package.json` to simplify it. After adding the script, you can run the application using: `npm run ${script-name}`.

# App.js vs App2.js

- In `main.js` we have used the Jsx and React core to create the react element
- In `app.js` we are using the functional Component

## what is component composition?

- Component Composition is the process of combining multiple smaller components inside a larger one to build UIs in a modular and scalable way.

## Injecting React element

- We can inject the react element into the functional component using the brackets `{}`
- **What is react element?** It is nothing but javaScript object.
- **Methods to create React element?**
  - Using `React.createElement()` : as done in lecture 1
  - Using JSX as done in app.js file

## App2.js

- Calling Components in Three Different Ways:

```js
// 1. JSX syntax
<Title />

// 2. JSX self-closing

<Title></Title>

// 3. Function call
{Title()}
```
