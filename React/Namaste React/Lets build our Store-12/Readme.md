# Redux: Building cart feature using redux

- Install 2 libraries: react-redux and redux_toolkit
  - `npm install @reduxjs/toolkit react-redux`

## Steps in Redux:

- Create a store
- Connect the store to our application
- Create the slice
- dispatch the action
- read the data using the selector

## Creating the store:

- **Set Up the Store and Provider**
  - You created a single Redux store and used the `Provider` component to make it available to your entire React application.
- **Create Slices with Reducer Functions**
  - For each feature, you created a slice containing the initial state and an object of small reducer functions (addItem, removeItem) that define the state update logic.
- **Understand Actions**
  - You learned that for every reducer function, Redux Toolkit automatically creates an action creator with the same name, which you export to dispatch events from your components.
- **Export the Slice's Main Reducer**
  - You understood that createSlice combines all your small reducer functions into one main reducer for that slice. You then export this single, combined reducer using export default.
- **Combine All Slices in the Store**
  - You imported each slice's main reducer into your store.js file and combined them into a single root reducer for the entire application using configureStore.
