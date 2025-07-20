# Class based Component in react

- For understanding the class based component in react we are creating a `UserClass.js` file
- you consume (use) a class-based component in React in much the same way
  you consume a functional-based component. The syntax for rendering them in JSX and passing props is identical.
- `How props are consumed in class Based component`
  - they are consumed in the constructor. In constructor super() is mandatory

## Key Points about constructor

- `this.props:` This is the magic object. It automatically contains all the attributes you pass to your component in JSX. Immutability: this.props is read-only.
- You should never modify `this.props` directly inside the component. If you need to change data, that data should be managed as state within the component, or the parent component should pass different props.
- super(props): If you define a constructor in your class component, you must call super(props) as the very first statement. This initializes the base React.Component class and ensures that this.props is correctly set up before your constructor code runs. Without super(props), this.props would be undefined inside the constructor (though it would be available in render() and other lifecycle methods).

## Understanding the React life cycle Diagram

- In react there is 2 phase: Render phase and Commit phase
  - In render phase, the constructor and render phase is called
  - The commit phase in which componentDidMount is called is batched [ meaning parent and multiple children component -> commit phase is batched ]. This is done for optimization
