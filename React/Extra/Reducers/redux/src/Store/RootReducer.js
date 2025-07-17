// Combining the reducers for the Redux store
// This file imports the auth reducer and combines it into a root reducer

import { combineReducers } from "redux";
import authSlice from "./Auth/Reducer";

const rootReducer = combineReducers({
  jwtAuthentication: authSlice,
});

export default rootReducer;
