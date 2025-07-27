# Data is New oil: Topics:

- **Higher Order Components (HOCs)**

  - A component which takes a component and return a component with append modification.
    - I am promoting a restaurant based on the location

- **Controlled and Uncontrolled Components**

  - Difference lies in where the "single source of truth" for the component's data is stored.
    - In a controlled component, React is the single source of truth. The component’s state (like the text in an input box) is managed by a React state variable (useState)
    - In an uncontrolled component, the DOM is the single source of truth. The form element (e.g., <input>) manages its own state internally, just like in traditional HTML. React doesn't control its value.

- **Lifting the state up**

  - The parent component (RestaurantMenu) holds a single state (e.g., showIndex).
  - The individual accordion items (Accordion) no longer have their own state. They become "controlled" by the parent.
  - That single state in the parent dictates which child accordion to show, ensuring only one can be open at a time.

- **Context API**
