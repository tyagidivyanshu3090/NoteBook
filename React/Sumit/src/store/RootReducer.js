import { combineReducers } from "redux";
import authSlice from './Auth/Reducer';

const rootReducer = combineReducers({
    jwtAuthentication: authSlice,
});

export default rootReducer;

