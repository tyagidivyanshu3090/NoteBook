import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// exporting the actions [ created internally by RTK based on the reducer function names ]
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// exporting slice reducer which is also created internally by RTK based on the initialState and reducers
export default cartSlice.reducer;

// *  Selectors:
/*
  * Selector Function: Create a function that takes state as a parameter.
    - Inside the function, access the data using the slice's name (e.g., state.cart).
    - Return the Specific Data: Return the piece of state your component needs (e.g., state.cart.items).
  * Export the Function: Export the selector so you can import it into your components.
*/
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.length;
