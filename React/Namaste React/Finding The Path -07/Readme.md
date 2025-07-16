# Finding the Path: Routing

- **Understanding the useEffect and useState hook**
- **Understanding the Routes**
  - `useRouteError` hook of react-router-dom
  - `isRouteErrorResponse` hook is also used
- **Link tag over anchor tag**
  - Difference btw navlink and link tag
- **Implementing routing in React application**
  - 2 Types of routing:
    - Client side Routing
    - Server side Routing [ not rendering ]
- **Different URL routes and corresponding pages within a single-page application.**
  - Essential concepts like createBrowserRouter for configuration, RouterProvider for rendering, and Link for seamless, non-reloading navigation
- **dynamic routing for unique content, error handling with custom pages and the useRouteError hook.**


## Hooks

- **Understanding the useEffect hook**

  - The tutor talked about the 3 flavours of useEffect: when it is called.
    - No dependency array (runs on every render):
    - Empty dependency array [] (runs once after initial render, like componentDidMount)
    - Dependency array with values [dep1, dep2] (runs on initial render and when any dependency changes):

- **Understanding the useState hook**
  - Never create the useState outside of the body of a functional component.
  - Create `local state variable` inside the functional component
  - **Always define the state variable on the top of the body of functional component** This is a best practice and a strong convention.

## Understading React-router dom hooks

```jsx
npm i react-router-dom
```

## what is outlet?

- The <Outlet /> component in React Router v6+ acts as a placeholder for rendering nested routes (child routes) within a parent route's component.
- Named import from react-router-dom

## what is Link?

- similar to anchor tag.
- use `to` over `href` for redirection
- Named import from react-router-dom
