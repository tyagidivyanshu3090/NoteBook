# Finding the Path: Routing

- **Understanding the useEffect hook**

  - The tutor talked about the 3 flavours of useEffect: when it is called.
    - No dependency array (runs on every render):
    - Empty dependency array [] (runs once after initial render, like componentDidMount)
    - Dependency array with values [dep1, dep2] (runs on initial render and when any dependency changes):

- **Understanding the useState hook**
  - Never create the useState outside of the body of a functional component.
  - Create `local state variable` inside the functional component
  - **Always define the state variable on the top of the body of functional component** This is a best practice and a strong convention.
