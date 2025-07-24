import { createSlice } from "@reduxjs/toolkit";
import { loadAuthState, saveAuthState } from "./Util/authUtil";

// Load initial state from local storage

const persistedState = loadAuthState();

const initialState = persistedState || {
  username: "",
  refreshToken: "",
  jwt: "",
};

const authSlice = createSlice({
  name: "jwtAuthentication",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.username = action.payload.username;
      state.refreshToken = action.payload.refreshToken;
      state.jwt = action.payload.jwt;

      //save
      saveAuthState(state);
    },

    clearCredentials: (state) => {
      state.username = "";
      state.refreshToken = "";
      state.jwt = "";

      // Clear the state from local storage
      saveAuthState(state);
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
