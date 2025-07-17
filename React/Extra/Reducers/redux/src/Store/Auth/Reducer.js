// Importing createSlice from Redux Toolkit to simplify reducer and action creation
import { createSlice } from "@reduxjs/toolkit";

// Import utility functions to load and save authentication state from local storage
import { loadAuthState, saveAuthState } from "./Util/authUtil";

// ✅ Try to load the persisted authentication state from localStorage (if available)
const persistedState = loadAuthState();

// ✅ Define the initial authentication state
// If localStorage has saved auth state, use it; otherwise, start with empty fields
const initialState = persistedState || {
  username: "",
  refreshToken: "",
  jwt: "",
};

// ✅ Create a slice of the Redux store for authentication
const authSlice = createSlice({
  name: "jwtAuthentication", // Slice name (used as prefix for action types)
  initialState: initialState, // Initial state defined above
  reducers: {
    // ✅ Reducer to set user credentials (after login)
    setCredentials: (state, action) => {
      // Update state values with data from the action payload
      state.username = action.payload.username;
      state.refreshToken = action.payload.refreshToken;
      state.jwt = action.payload.jwt;

      // Save updated auth state to localStorage for persistence
      saveAuthState(state);
    },

    // ✅ Reducer to clear user credentials (on logout)
    clearCredentials: (state) => {
      // Reset all fields to empty values
      state.username = "";
      state.refreshToken = "";
      state.jwt = "";

      // Update localStorage to reflect cleared state
      saveAuthState(state);
    },
  },
});

// ✅ Export the auto-generated action creators for use in components
export const { setCredentials, clearCredentials } = authSlice.actions;

// ✅ Export the reducer function to be used in the Redux store
export default authSlice.reducer;
